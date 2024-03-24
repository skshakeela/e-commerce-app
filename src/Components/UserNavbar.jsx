import "../styles/UserNavbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function UserNavbar() {
  return (
    <div>
       <nav className="navbar">
            <div className="logo" >
        <h1><span>Shoppers</span>Cart</h1>
            </div>

            <div className="option">
         
         
            </div>
            <div className="account">
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <AccountCircleIcon/> Account
      </Dropdown.Toggle>

     
        <Dropdown.Menu>
              <Dropdown.Item href="/userhomepage/userlocation">Add Address</Dropdown.Item>
              <Dropdown.Item href="/userhomepage/userupdate">Edit Account</Dropdown.Item>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
      
    </Dropdown>
            </div>

        </nav>  
    </div>
  )
}

export default UserNavbar