import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import "../styles/UserUpdate.css"

function UserUpdate (){
    let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[phone,setPhone]=useState("")
  let[age,setAge]=useState("")
  let[gender,setGender]=useState("")
  let[password,setPassword]=useState("")
  let[id,setId]=useState("")
  
   
  let data={id,name,email,phone,gender,age,password}
  let user=JSON.parse(localStorage.getItem("User"))
   useEffect(()=>{
     setId(user.id)
     setName(user.name)
     setGender(user.gender)
     setAge(user.age)
     setEmail(user.email)
     setPassword(user.password)
     setPhone(user.phone)
   },[])
    let editUser = (e) =>{
      e.preventDefault();
      axios.put(`http://localhost:8080/users`,data)
      .then((res)=>{
          console.log(res);
          alert("Data updated succesfull")
      })
      .catch((err)=>{
          console.log(err);
          alert("Data Not Found")
      })
  }
  
    return (
      <div className='useredit'>
        <form onSubmit={editUser} action="">
            <label htmlFor="">Id</label>
            <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
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
    <input type="text" placeholder="Enter the password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button className='btn btn-info'>SIGN UP</button>
              </form>
      </div>
    )
  }
export default UserUpdate
