import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/ProductUpdate.css"
import axios from "axios"
function ProductUpdate (){
    let[name,setName]=useState("")
    let[brand,setBrand]=useState("")
    let[cost,setCost]=useState("")
    let[description,setDesription]=useState("")
    let[image_url,setImageurl]=useState("")
    let[category,setCategory]=useState("")
    let[id,setId]=useState("")

    let param=useParams()
let data={name,brand,cost,image_url,description,category,id}

   
    useEffect(()=>{
     axios.get(`http://localhost:8080/products/find-by-id/${param.id}`)
    .then((res)=>{
        console.log(res.data.body);
        setName(res.data.body.name)
        setBrand(res.data.body.brand)
        setCategory(res.data.body.category)
        setCost(res.data.body.cost)
        setDesription(res.data.body.description)
        setImageurl(res.data.body.image_url)
        setId(res.data.body.id)
    })
    .catch((err)=>{
        console.log(err);
    })
    },[data])

    let updateData=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/products`,data)
        .then((res)=>{
          console.log(res);
          alert("product edited successfully")
        })
        .catch((err)=>{
          console.log(err);
        alert("something went wrong")
        })
      }

    
  return (
    <div className="UpdateProducts">
    <form onSubmit={updateData} action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter the Name" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
        <label htmlFor="">Brand</label>
        <input type="text" placeholder="Enter the brand" value={brand} onChange={(e)=>{setBrand(e.target.value)}} />
        <label htmlFor="">Cost</label>
        <input type="text" placeholder="Enter the Cost" value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
        <label htmlFor="">description</label>
        <input type="text"  placeholder="Enter the phone number" value={description} onChange={(e)=>{setDesription(e.target.value)}}/>
        <label htmlFor="">Category</label>
        <input type="text" placeholder="Enter the category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        <label htmlFor="">Image url</label>
        <input type="text" placeholder="Enter the image url" value={image_url} onChange={(e)=>{setImageurl(e.target.value)}}/>
        <button className='btn btn-info'>SUBMIT</button>
    </form>
        </div>
  )
}

export default ProductUpdate