import axios from "axios"
import { useEffect, useState } from "react"


function ProductView() {
  let[data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then((resp)=>{
  setData(resp.data)
      console.log("got the data");})
    .catch(()=>{console.log("error");})
  },[])
   return(
    <div>

{
  data.map((b)=>{
return(
  <div>
    <h1>{b.name}</h1>
  </div>
)
  })
}
    </div>
   )
  
}

export default ProductView