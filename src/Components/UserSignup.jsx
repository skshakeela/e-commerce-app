import axios from "axios"
import { useState } from "react"
import "../styles/UserSignup.css"
import { useNavigate } from "react-router-dom"
const UserSignup = () => {
  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[phone,setPhone]=useState("")
  let[age,setAge]=useState("")
  let[gender,setGender]=useState("")
  let[password,setPassword]=useState("")
  let navigate=useNavigate()

  let data={name,gender,email,phone,age,password}
  let saveUser=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8080/users`,data)
    .then((res)=>{
      console.log(res);
     alert("data added successfully");
     navigate("/userlogin")
    })
    .catch((err)=>{
      console.log(err);
      alert("data not found")
    })
  }
  return (
    <div className="usersignup">
        <form  onSubmit={saveUser} action="">
    <label htmlFor="">Name</label>
    <input type="text" placeholder="Enter the Name" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
    <label htmlFor="">age</label>
    <input type="number" placeholder="Enter the age" value={age} onChange={(e)=>{setAge(e.target.value)}}/> 
    <label htmlFor="">Email</label>
    <input type="email" placeholder="Enter the Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <label htmlFor="">gender</label>
    <input type="text" placeholder="Enter the gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
    <label htmlFor="">Phone Number</label>
    <input type="tel"  placeholder="Enter the phone number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
    <label htmlFor="">Password</label>
    <input type="password" placeholder="Enter the password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button className='btn btn-info'>SIGN UP</button>
</form>
    </div>
  )
}

export default UserSignup