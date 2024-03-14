import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../styles/MerchantNavbar.css"
const MerchantNavbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="logo" >
        <h1><span>Shoppers</span>Cart</h1>
            </div>

            <div className="option">
          <Link to="/merchanthomepage/productview">View products</Link>
            </div>
            <div className="account">
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <AccountCircleIcon/> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/merchanthomepage/updatemerchant">Edit Account</Dropdown.Item>
        <Dropdown.Item href="/"> Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
            </div>

        </nav>
    </div>
  )
}

export default MerchantNavbar