
import './App.css';
import Welcome from "./components/welcome" ;
import Front from "./components/Front" ;
import {BrowserRouter as Router,Link,Route} from "react-router-dom" ;



function App() {
  return (
    <Router>
      <div className="App">
         
          <Route path="/welcome" exact component={Welcome}></Route>
          <Link to="/welcome"><Front/></Link>
    </div>
    </Router>

    
  );
}

export default App;
