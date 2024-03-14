import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/UserLogin.css"
import axios from 'axios';
const UserLogin=()=>{
  let[email,setEmail]=useState("")
let[password,setPassword]=useState("")
let navigate=useNavigate();


function verifyUser(e){
  e.preventDefault();
  axios.post(`http://localhost:8080/users/verify-by-email?email=${email}&password=${password}`)
  .then(()=>{
  navigate('/userhomepage')
  alert("login successfully")
  })
  .catch((err)=>{console.log(err);
  alert("Invalid credentials")
  })

}
    return(
        <div>
            <Form className="userlogin">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <button className='btn btn-success mx-5' onClick={verifyUser}>Sign in</button>
        <button className='btn btn-danger mx-5'><Link to="/usersignup">Sign up</Link></button>
      </Form.Group>
    </Form>
        </div>
    )
}
export default UserLogin