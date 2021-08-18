import React,{useState} from  "react" ;
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./front.css";
import Input from "./input.js"



function Welcome(){

    var [email,setEmail]=useState("")
    var [password,setPassword]=useState("")
    var [valid,setValid]=useState("")
    var [validps,setValidps]=useState("")
    var [goin,setGoin]=useState("goin")

    return(
       <div className ="holla">
           <form>
           <Input for ="mail" class="mail" name="Name" class1="email" 
           type ="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />

           <Input for ="is" class="pass" name="Password" class1="password" 
           type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

           <button className = "btn" type="submit" 
           onClick={(e)=>{
               e.preventDefault()
               if(email.length < 1){
                   setValid("please input a name")
               }else{setValid("")}
               if(password.length < 8){
                   setValidps("input an eigth digit password or more")
               }else{ setValidps(""); }

               if( email.length > 1 & password.length > 8){
                   setGoin("show")
               }
           }}
           >sign in</button>
           </form>
          
         <Link to="/page"> <button className = {goin}>go in</button></Link>
           <p className="p">{valid}</p>
           <h2 className="h2">{validps}</h2>

    

       </div>

    )
}
export default Welcome 
