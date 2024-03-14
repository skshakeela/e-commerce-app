import { Link } from "react-router-dom"
import "../styles/LandingPage.css"
const LandingPage=()=>{
    return(
        <div className="landingPage">
<Link to="/merchantlogin">
    <img src="https://tse4.mm.bing.net/th?id=OIP.WpnGIPj1DKAGo-CP64znTwHaHa&pid=Api&P=0&h=180" alt="" id="img2"/>Merchant
</Link>

<Link to="/userlogin">
    {/* <img src="https://tse4.mm.bing.net/th?id=OIP.WpnGIPj1DKAGo-CP64znTwHaHa&pid=Api&P=0&h=180" alt="" id="img2"/>User */}
   
    <img src="https://tse2.mm.bing.net/th?id=OIP._NWvCJxi-_nfSbQF2uTypAHaHa&pid=Api&P=0&h=180" alt="" />user
</Link>
        </div>
    )
}
export default LandingPage