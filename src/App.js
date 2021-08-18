import React from  "react" ;
import './App.css';
import Welcome from "./components/welcome" ;
import Front from "./components/Front" ;
import {BrowserRouter as Router,Route} from "react-router-dom" ;
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Page from "./components/page";
import Final from "./components/final";



function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
           <Route path = "/" component={Front} exact></Route>
           <Route path = "/welcome" component={Welcome} exact></Route>
           <Route path="/page" component ={Page} exact></Route>
           <Route path="/register" component ={Final} exact></Route>


           
         </Switch>
          
    </div>
    </Router>

    
  );
}

export default App;
