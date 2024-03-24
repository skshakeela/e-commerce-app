import UserNavbar from "./UserNavbar"
import { Routes,Route } from "react-router-dom"
import UserProductview from "./UserProductView.jsx"
import UserLocation from "./UserLocation.jsx"
import UserUpdate from "./UserUpdate.jsx"
function UserHomePage() {
  return (

    <div>
        <UserNavbar/>
        <Routes>
            <Route>
           <Route path="/userlocation" element={<UserLocation/>}></Route>
           <Route path="/userupdate" element={<UserUpdate/>}></Route>
           <Route path="/" element={<UserProductview/>}></Route>
            </Route>
        </Routes>

    </div>
  )
}
export default UserHomePage

