import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import HomeComponent from './Pages/Home/HomeComponent'
import LoginComponent from './Pages/LoginComponent/LoginComponent'
import RegisterComponent from './Pages/RegisterComponent/RegisterComponent'
import About from './Pages/About/About';


export default class App extends React.Component{

  render(){

    return(
      <Router>
            <div>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Router path="/about" component={About} />
            </div>
      </Router>  
     
    );
  }



} 






