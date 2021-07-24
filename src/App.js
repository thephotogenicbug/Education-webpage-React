import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
function App() {
  return (
    <Router>
    <Navbar/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    </Router>
  );
}

export default App;
