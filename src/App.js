import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './page/Home'
import Room from './page/Room'
import SingleRoom from './page/SingleRoom'
import { FaAlignJustify } from "react-icons/fa";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() { 
    return (
      <Router>
      <div>
        <Navbar />
        <Route path = "/" exact component ={Home} />
        <Route path = "/room" exact component ={Room} />
        <Route path = "/single-room" exact component ={SingleRoom} />
      </div>
      </Router>
     );
  }
}
 
export default App;


