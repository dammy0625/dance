import React from  "react" ;
import "./front.css";
import Input from "./input.js";


function Welcome(){
    return(
       <div className ="holla">
           <Input for ="mail" class="mail" name="E-mail" class1="email" type ="text"/>
           <Input for ="is" class="pass" name="Password" class1="password" type="password"/>

           <button className = "btn">sign in</button>
           <button className = "btn1">sign up</button>

       </div>
    )
}
export default Welcome