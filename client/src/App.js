import React, { Component, Fragment } from "react";
//Switch Component groups <Route>s together
import { Switch, Route, withRouter } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Eateries from './containers/Eateries';

import './assets/App.css';

class App extends Component {
  render() {  
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/eateries' component={Eateries} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
       
      </Fragment>
    );
  }; //end render
}; //end class App

export default withRouter(App);

