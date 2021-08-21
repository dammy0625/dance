import React from  "react" ;
import "./page.css";


function Final(){
   
    return(
        <div className="final">
            <p className="for">Follow the instruction below to register</p>
           
            <button className="btn"
          onClick={()=>{
              alert("your request has been sent ...you will receive an email shortly from our customer care...thanks..")
          }}
          >Register</button>
            
        </div>
    )
}
export default Final