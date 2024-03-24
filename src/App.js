import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import LandingPage from "./Components/LandingPage";
import MerchantLogin from "./Components/MerchantLogin"
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignup from "./Components/MerchantSignup";
import MerchantHomePage from "./Components/MerchantHomePage";
import UserSignup from "./Components/UserSignup";
import Error from "./Components/Error";
import Protect from "./Components/Protect";
import UserHomePage from "./Components/UserHomePage";
import Protect1 from "./Components/Protect1";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
     <Route path="/merchantlogin" element={<MerchantLogin/>}></Route>
      <Route path="/merchantsignup" element={<MerchantSignup/>}></Route>
      <Route path="/merchanthomepage/*" element={<Protect Child={MerchantHomePage}/>}></Route>
      <Route path="/userlogin" element={<UserLogin/>}></Route>
      <Route path="/usersignup" element={<UserSignup/>}></Route>
      <Route path="/userhomepage/*" element={<Protect1 Child={UserHomePage}/>}></Route>
   
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
