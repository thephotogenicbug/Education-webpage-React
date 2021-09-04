import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import AnnamalaiUniversity from './Components/AnnamaliUniversity/AnnamaliUniversity';
import SinghaniaUniversity from './Components/SinghaniaUniversity/SinghaniaUniversity';
import JainUniversity from './Components/JainUniversity/JainUniversity';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import { FooterContainer } from './containers/footer'
function App() {
  return (
    <Router>
    <Navbar/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/annamalaiuniversity' component={AnnamalaiUniversity}/> 
    <Route exact path='/singhaniauniversity' component={SinghaniaUniversity}/>
    <Route exact path='/jainuniversity' component={JainUniversity}/>
    <Route exact path="/applicationform" component={ApplicationForm}/>
    <FooterContainer/>
    </Router>
  );
}

export default App;
