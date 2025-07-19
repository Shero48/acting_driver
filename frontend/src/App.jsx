import Booking from "./component/booking";
import Header from "./component/header";
import Home from "./component/home";
import Register from "./pages/register";
import Sidebar from "./component/sidebar";
import Booking_list from "./component/booking_list";
import Profile from "./pages/profile";
import Notification from "./component/notification";
import { useEffect } from "react";
import { find_user } from "./slicer/user";
import { useDispatch,useSelector } from "react-redux";
import { Route,Router ,Routes,useNavigate,Navigate} from "react-router-dom";
import get_time from "./utill/get_time";
function App() {
  const dispatch=useDispatch();
  const navigate =useNavigate()
  const {auth_user}=useSelector(state=>state.user);
  const {notify}=useSelector(state=> state.search);
  useEffect(()=>{
    async function find(){
      const value=await dispatch(find_user());
      console.log("user: ",value)
      if(value.payload?.msg=="user find successfully"&&auth_user){
          navigate('/');
      }else{
        navigate('/auth');
      }
    }
    find()
  },[])
  return (
    <div className="h-screen w-screen overflow-x-hidden text-content font-custom  bg-base-100 text-base-content" data-theme="mytheme">
     <Header/>
     <Sidebar/>
     {notify&&<Notification/>}
     {/* <Profile/> */}
     {/* <Booking_list/> */}
     {/* {auth_user&&<Home/>} */}
     {/* <Booking/> */}
     <Routes>
         <Route
            path="/"
            element={
              auth_user &&Object.keys(auth_user).length>0 ? <Home /> : <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/auth"
            element={
              auth_user&&Object.keys(auth_user).length>0  ? <Navigate to="/" replace /> : <Register />
            }
          />
        {/* <Route path="/auth" element={<Register/>}/>
        <Route path="/" element={<Home/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/booking/:id" element={<Booking/>}/>
        <Route path="/list" element={<Booking_list/>}/>
     </Routes>
    </div>
  );
}

export default App;