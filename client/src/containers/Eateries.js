
import React, { Component, Fragment } from "react";
import GoogleMapContainer from './GoogleMapContainer';

class Eateries extends Component {

  render() {
      return (
        <Fragment>
          <GoogleMapContainer />
        </Fragment>
      ) //end return
  } //end render
} //end class Eateries



//When connect is used, it 'connects' the component to the application store.
//Now is smart component or container.
    export default (Eateries)