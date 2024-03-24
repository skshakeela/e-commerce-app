import { Routes,Route} from "react-router-dom"
import MerchantNavbar from "./MerchantNavbar"
import ProductView from "./ProductView";
import UpdateMerchant from "../Components/MerchantUpdate"
import AddProducts from "./AddProducts";
import ProductUpdate from "./ProductUpdate"
const MerchantHomePage=()=>{
    return(
        <div className="mhp">
 <MerchantNavbar/>
<Routes>
   
    <Route path="/productview" element={<ProductView/>}></Route>
    <Route path="/updatemerchant" element={<UpdateMerchant/>}></Route>
    <Route path="/addproducts" element={<AddProducts/>}></Route>
    <Route path="/updateproduct/:id" element={<ProductUpdate/>}></Route>
</Routes>
        </div>
    )
}
export default MerchantHomePage