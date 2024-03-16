import { Routes,Route} from "react-router-dom"
import MerchantNavbar from "./MerchantNavbar"
import ProductView from "./ProductView";
import UpdateMerchant from "../Components/MerchantUpdate"
import AddProducts from "./AddProducts";

const MerchantHomePage=()=>{
    return(
        <div className="mhp">
 <MerchantNavbar/>
<Routes>
   
    <Route path="/productview" element={<ProductView/>}>view Products</Route>
    <Route path="/updatemerchant" element={<UpdateMerchant/>}></Route>
    <Route path="/addproducts" element={<AddProducts/>}></Route>
</Routes>
        </div>
    )
}
export default MerchantHomePage