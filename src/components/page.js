import React from  "react" ;
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./page.css";

function Page(){
    console.log(window.innerHeight)
    return(
        <div >
            <div className = "first">
                <h1 className="version">v.2.1</h1>
            </div>
            <div className = "body">
                <h1 className="ways">how to register</h1>
                <ul className="unor" >
                    <li>
                       <Link to="/register"> <p>click here to register now on the app </p></Link> 
                        
                        </li>
                    <li>
                        <p>You can also visit our studio at ijegun rd lagos nigeria to register</p>
                    </li>
                    <li>
                        <p> you can also cantact our customer-care number to register or lodge a complain</p>
                    </li>
                </ul>

                <div className="footer"><h5>e-mail : muyiwalateef@gmail.com</h5>
                <h6>customer-care : +234 80667788</h6></div>
            </div>



        </div>
    )
}
export default Page