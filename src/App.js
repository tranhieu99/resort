import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './page/Home'
import Room from './page/Room'
import SingleRoom from './page/SingleRoom'
import Error from './page/Error'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() { 
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
        <Route path = "/" exact component ={Home} />
        <Route path = "/rooms" exact component ={Room} />
        <Route path = "/rooms/:slug" exact component ={SingleRoom} />
        <Route component = {Error} />
        </Switch>
        
      </div>
      </Router>
     );
  }
}
 
export default App;


