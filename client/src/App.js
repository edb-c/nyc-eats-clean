import React, {Fragment, useEffect } from "react";
//Switch Component groups <Route>s together
import { Switch, Route, withRouter } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Eateries from './components/Eateries';
import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Redux
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
};

//React Function using Hooks
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);  //Empty arry bracket makes this run only once, not in a loop
 
    return (
      <Fragment>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/eateries' component={Eateries} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          
        </Switch>
       
      </Fragment>
    );
}; //end class App

export default withRouter(App);

