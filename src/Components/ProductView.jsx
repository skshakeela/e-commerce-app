import axios from "axios"
import "../styles/ProductView.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'

function ProductView() {
  let navigate=useNavigate();
  let[data,setData]=useState([])
  let admin=JSON.parse(localStorage.getItem("Merchant"))
  
  
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${admin.id}`)
      .then((res) => {
        console.log(res.data.body);
        setData(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [data])

  let searchBybrand = (brand) => {
    axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
      .then((res) => {
        console.log(res.data.body);
        setData(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let searchByCategory = (category) => {
    axios.get(`http://localhost:8080/products/find-by-category/${category}`)
      .then((res) => {
        console.log(res.data.body);
        setData(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let editData = (id) =>{
    navigate(`/merchanthomepage/updateproduct/${id}`)
  }

let removeData = (name,id) =>{
  axios.delete(`http://localhost:8080/products/${id}`)
  .then((res) => {
    console.log(res);
    alert(`${name} removed successfully`)
  })
  .catch((err) => {
    console.log(err);
  })
}

return(

<div className='disp'>
{
  data.map((x)=>{
    return(
      
      <div className="search">
        {/* div for brand */}
<div className="brand">
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Search
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{searchBybrand(x.brand)}}>By Brand</Dropdown.Item>
        <Dropdown.Item onClick={()=>{searchByCategory(x.category)}}> By Category</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
</div>
{/* div for product view */}
<div className='productview'>
        <div className='image'>
  <span id='category'>{x.category}</span>
  <img src={x.image_url} alt="" />
        </div>
        <div className="desc">
      <h4 id="name">{x.name}||{x.brand}</h4>
      <span id="cost"><sup><b>₹</b></sup>{x.cost}</span><br />
      <span id='desc'>{x.description}</span>
<div className="icons">
<EditIcon  onClick={()=>{editData(x.id)}}/>
<DeleteForeverIcon onClick={()=>{removeData(x.name,x.id)}} />
</div>

        </div>
      </div>
      </div>
    )
  })
}
</div>
   )
  
}

export default ProductView








  
//   let deleteProduct=(id)=>{
//     axios.delete(`http://localhost:8080/products/${id}`)
//     .then((e)=>{console.log("deleted");})
//     .catch(()=>{console.log("error");})
//      }
//    return(
//    <div>

// <table border={2}>
//     <tr>
//         <th>ID</th>
//         <th>NAME</th>
//         <th>BRAND</th>
//         <th>CATEGORY</th>
//         <th>COST</th>
//         <th>DESCRIPTION</th>
//         <th>IMAGE_URL</th>
//     </tr>
//     {
//         data.map((b)=>{
//             return(
//            <tr>
//             <td>{b.id}</td>
//             <td>{b.name}</td>
//             <td>{b.brand}</td>
//             <td>{b.category}</td>
//             <td>{b.cost}</td>
//             <td>{b.description}</td>
//             <td>{b.image_url}</td>
//             <td><Link><button className='btn btn-success'>EDIT</button></Link></td>
//             <td><button className='btn btn-danger' onClick={()=>{deleteProduct(b.id)}}>DELETE</button></td>
//            </tr>
//             )
//         })
//     }
// </table>
//     </div>