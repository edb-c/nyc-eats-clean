import React, { Component, Fragment } from 'react';
import GoogleMap from './GoogleMapContainer';
import CardGroup from 'react-bootstrap/CardGroup';

import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

export const Grades = ({ grades }) => {
  return (
    <Fragment>
      {grades.map(grade => (
        <Card>
          <Card.Header>
            {grade.dba} - Grade: {grade.grade}{' '}
          </Card.Header>

          <Card.Body>
            <Card.Text>
              Cuisine: {grade.cuisine_description} <br />
              Address: {grade.building} {grade.street}, {grade.boro}{' '}
              {grade.zipcode} <br />
              Phone: {grade.phone} <br />
              Violation Description: {grade.violation_description} <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Last updated: {grade.grade_date}
            </small>
          </Card.Footer>
        </Card>
      ))}
    </Fragment>
  );
};
/*  let active = 2;
  //let items = [];
  for (let number = 1; number <= 10; number++) {
    grades.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );    
*/

class EateriesContainer extends Component {
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(console.log);
  } //end componentDidMount

  state = {
    grades: []
  };

  render() {
    return (
      <Fragment>
        <div>
          <center>
            <br />
            <h2>NYC Health Inspection Results</h2>
            <br />
          </center>
        </div>

        <div className='eatery-container'>
          <div className='eatery-grades-container'>
            <Grades grades={this.state.grades} />
          </div>
          <div className='eatery-map-container'>
            <GoogleMap />
          </div>
        </div>
      </Fragment>
    ); //end return
  } //end render
} //end class EateriesComponent

export default EateriesContainer;
//    {paginationBasic}
