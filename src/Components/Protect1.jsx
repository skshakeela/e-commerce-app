import { Navigate } from "react-router-dom";

function Protect1({Child}){
    let x=localStorage.getItem("User")
    let verifyProtect=()=>{
            if(x==null){
                   return false;
            }
           else{
                  return true;
            }
          }
  
  return (
    <div>
       {verifyProtect()?<Child/>:<Navigate to="/userlogin"/>}
      
    </div>
  )
}

export default Protect1