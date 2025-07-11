import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker,Polyline, Popup,useMap} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { find_km } from '../slicer/search';
import { useSelector,useDispatch } from 'react-redux';
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const Routing=({from,to})=>{
  const map=useMap();
  const dispatch=useDispatch();
    useEffect(()=>{
    const distence=(map.distance(from,to)/1000).toFixed(2);
    console.log(distence)
    dispatch(find_km(distence));
    map.fitBounds([from,to]);
  },[from,to,map])
  return [from,to]?(
      <Polyline positions={[from,to]} pathOptions={{ color: 'blue', weight: 5 }} />
    ):null;
  }
const MapView = ({ from, to }) => {
  const position = {lat:from.lat, lng:from.lon} || { lat: 13.0827, lng: 80.2707 }; 
   return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {from && (
        <Marker position={[from.lat, from.lon]}>
          <Popup>Pickup</Popup>
        </Marker>
      )}
      {to && (
        <Marker position={[to.lat, to.lon]}>
          <Popup>Drop</Popup>
        </Marker>
      )}
       <Routing from={[from.lat, from.lon]} to={[to.lat, to.lon]}/>
    </MapContainer>
  );
};

export default MapView