import React from  "react" ;
import "./front.css" ;

function Input(props){
    return(
        <div >
        <label htmlFor= {props.for} className={props.class}>{props.name} </label>
   <input type = {props.type} className = {props.class1}
    id={props.for} value={props.value} onChange={props.onChange} />
        
   
    </div>
    )

}
export default Input