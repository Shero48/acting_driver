import Booking from "./component/booking";
import Header from "./component/header";
import Home from "./component/home";
import Register from "./pages/register";
import Sidebar from "./component/sidebar";
import Booking_list from "./component/booking_list";
function App() {
  return (
    <div className="h-lvh w-lvw overflow-x-hidden text-content font-custom  bg-base-100 text-base-content" data-theme="mytheme">
     {/* <Register/> */}
     <Header/>
     <Sidebar/>
     <Booking_list/>
     {/* <Home/> */}
     {/* <Booking/> */}
    </div>
  );
}

export default App;