import React, { Component, Fragment } from "react";
import GoogleMapContainer from './GoogleMapContainer';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

export const Grades = ({grades}) => {
 return (
  <div>
      <center><h2>NYC Restaurant Inspection Results</h2></center>
      {grades.map((grade) => (
        <Fragment>
          <CardGroup>
  <Card>
  <Card.Body>
  <Card.Title>{grade.dba} - Grade: {grade.grade} </Card.Title>
  <Card.Text>
            Cuisine: {grade.cuisine_description} <br />
            Address: {grade.building} {grade.street}, {grade.boro} {grade.zipcode} <br />
            Phone: {grade.phone}  <br />
            Violation Description: {grade.violation_description} <br />
              </Card.Text>
          </Card.Body>
          <Card.Footer>
      <small className="text-muted">Last updated: {grade.grade_date}</small>
    </Card.Footer>
          </Card>
          </CardGroup>
        </Fragment>        
      ))}
  </div>
)
};
  
class Eateries extends Component {
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
          .then(res => res.json())
          .then((data) => {
              this.setState({ grades: data })
          })
          .catch(console.log)
  } //end componentDidMount

  //A state = object that holds data pending to be rendered. Will store the output from the API call.
  state = {
    grades: []
  };

  render() {
      return (  
        <Fragment>
          <div class="row">
            <div className="column" >
              <Grades grades={this.state.grades} />
            </div>
            <div className="column" >
              <GoogleMapContainer />
            </div>
          </div>
        </Fragment>
      ) //end return
  } //end render
} //end class Eateries



//When connect is used, it 'connects' the component to the application store.
//Now is smart component or container.
    export default (Eateries)