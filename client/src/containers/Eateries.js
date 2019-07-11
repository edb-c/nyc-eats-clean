import React, { Component, Fragment } from "react";
import GoogleMapContainer from './GoogleMapContainer';

import '../assets/css.css';

class Eateries extends Component {

  render() {
      return (  
        <div class="row">
          <div className="column" >
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="column" >
            <GoogleMapContainer />
          </div>
        </div>
 
      ) //end return
  } //end render
} //end class Eateries



//When connect is used, it 'connects' the component to the application store.
//Now is smart component or container.
    export default (Eateries)