import { useEffect, useState } from "react"
import "../styles/MerchantUpdate.css"
import axios from "axios"
function MerchantUpdate () {
  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[phone,setPhone]=useState("")
  let[gst_number,setGst_number]=useState("")
  let[password,setPassword]=useState("")
  let[id,setId]=useState("")

  let data={id,name,email,phone,gst_number,password}
 let merchant=JSON.parse(localStorage.getItem("Merchant"))
  useEffect(()=>{
    setId(merchant.id)
    setName(merchant.name)
    setGst_number(merchant.gst_number)
    setEmail(merchant.email)
    setPassword(merchant.password)
    setPhone(merchant.phone)
  },[])

  let updateData=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8080/merchants`,data)
    .then((res)=>{
      console.log(res);
      alert("data updated successfully")
    })
    .catch(()=>{
    alert("error")
    })
  }
  return (
   
       <div className="merchantupdate">
<form onSubmit={updateData} action="">
  <label htmlFor="">Id</label>
  <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/>
    <label htmlFor="">Name</label>
    <input type="text" placeholder="Enter the Name" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
    <label htmlFor="">Email</label>
    <input type="email" placeholder="Enter the Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <label htmlFor="">GST Number</label>
    <input type="text" placeholder="Enter the Gst number" value={gst_number} onChange={(e)=>{setGst_number(e.target.value)}}/>
    <label htmlFor="">Phone Number</label>
    <input type="tel"  placeholder="Enter the phone number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
    <label htmlFor="">Password</label>
    <input type="password" placeholder="Enter the password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button className='btn btn-info'>SUBMIT</button>
</form>
    </div>
  )
}

export default MerchantUpdate