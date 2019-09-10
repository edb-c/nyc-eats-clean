import React, { Component, Fragment } from "react";
import GoogleMapContainer from './GoogleMapContainer';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'

export const Grades = ({grades}) => {
 return (
  <div>
      <center><h2>NYC Health Inspection Results</h2></center>
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

let active = 2;
let items = [];
for (let number = 1; number <= 10; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
};

export const paginationBasic = (
  <div>
    <Pagination size="sm">{items}</Pagination>
  </div>
);

  
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
          <div className="row">
            <div className="column" >
              <Grades grades={this.state.grades} />
              {paginationBasic}
            </div>
            <div className="column" >
              <GoogleMapContainer />
            </div>
          </div>
    
      
        </Fragment>
      ) //end return
      

  } //end render
} //end class Eateries

export default (Eateries);