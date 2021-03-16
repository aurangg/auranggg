import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/BackDrop/Backdrop';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  function drawerToggleClickHandler(){
    setSideDrawerOpen(!sideDrawerOpen)
  }
  function backdropClickHandler(){
    setSideDrawerOpen(!sideDrawerOpen)
  }
  let backdrop;

  if(sideDrawerOpen){
    backdrop = <Backdrop click={backdropClickHandler} />
  }
  return (
    <React.Fragment>
      <Router>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} drawerClickHandler={drawerToggleClickHandler} />
        {backdrop}
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/portfolio" exact component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
