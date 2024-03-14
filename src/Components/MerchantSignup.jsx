import React, { useState } from 'react'
import "../styles/MerchantSignup.css"
import axios from 'axios'
 function MerchantSignup() {
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[phone,setPhone]=useState("")
    let[gst_number,setGst_number]=useState("")
    let[password,setPassword]=useState("")

    let data={name,email,phone,gst_number,password}
    let saveMerchant=(e)=>{
      e.preventDefault();
      axios.post(`http://localhost:8080/merchants`,data)
      .then((res)=>{
        console.log(res);
       alert("data added successfully");
      })
      .catch((err)=>{
        console.log(err);
        alert("data not found")
      })
    }
  return (
    <div className="merchantsignup">
<form  onSubmit={saveMerchant} action="">
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
    <button className='btn btn-info'>SIGN UP</button>
</form>
    </div>
  )
}
export default MerchantSignup
