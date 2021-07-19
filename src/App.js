import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <HashRouter>
    <Navbar/>
    <Route exact path='/' component={Home}/>
    </HashRouter>
  );
}

export default App;
