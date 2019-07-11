import React, { Component, Fragment } from "react";
//Switch Component groups <Route>s together
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import GoogleMapContainer from './containers/GoogleMapContainer';

import './assets/App.css';

class App extends Component {
  render() {  
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/' component={Landing} />
          <Route path='/' component={GoogleMapContainer} />
        </Switch>
        
      </Fragment>
    );
  }; //end render
}; //end class App

export default App;

