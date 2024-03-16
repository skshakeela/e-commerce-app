import axios from "axios"
import { useState } from "react"
import "../styles/AddProduct.css"

function AddProducts(){
    let[name,setName]=useState("")
    let[brand,setBrand]=useState("")
    let[cost,setCost]=useState("")
    let[description,setDesription]=useState("")
    let[image_url,setImageurl]=useState("")
    let[category,setCategory]=useState("")

    let data={name,brand,category,description,image_url,cost}
    let admin=JSON.parse(localStorage.getItem("Merchant"))
    
    let addData=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/products/${admin.id}`,data)
        .then((res)=>{
            console.log(res);
            alert("Product added successfully")
        })
        .catch((err)=>{
         console.log(err);
         alert("something went wrong")
        })
    }
    return(
        <div className='AddProducts'>
<form onSubmit={addData} action="">
  <label htmlFor="">name</label>
  <input type="text" value={name} placeholder="Enyter the name" onChange={(e)=>{setName(e.target.value)}}/>
  <label htmlFor="">category</label>
  <input type="text" value={category} placeholder="Enter the category" onChange={(e)=>{setCategory(e.target.value)}}/>
  <label htmlFor="">Cost</label>
  <input type="text" value={cost} placeholder="Enter the Cost"onChange={(e)=>{setCost(e.target.value)}}/>
  <label htmlFor="">Brand</label>
  <input type="text" value={brand} placeholder="Enter the Brand" onChange={(e)=>{setBrand(e.target.value)}}/>
  <label htmlFor="">Description</label>
  <input type="text" value={description} placeholder="enter the Description"  onChange={(e)=>{setDesription(e.target.value)}}/>
  <label htmlFor="">Image url</label>
  <input type="text" value={image_url} placeholder="enter the Image address"onChange={(e)=>{setImageurl(e.target.value)}}/>
  <button className="btn btn-success">Submit</button>
</form>
        </div>
    )
}
export default AddProducts