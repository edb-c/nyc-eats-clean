import React, { Component, Fragment } from 'react';
//import EateryCard from '/EateryCard';
import GoogleMap from './Map';
import { CardGroup, Card, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchEateriesGrades } from '../actions/eatery';


class EateriesContainer extends Component {

    componentWillMount() {
    this.props.fetchEateriesGrades();
    
  }
  render() {
    
    const eateryCards = this.props.eateriesGrades.map(eateryCard => (
      <div>
        <Card style={{ width: '20rem' }}> 
          <Card.Header>
            {eateryCard.dba}
          </Card.Header>
        <Card.Header>
            Grade: {eateryCard.grade}{' '}
          </Card.Header>          
        <Card.Body>
            <Card.Text>
              Cuisine: {eateryCard.cuisine_description} <br />
              Address: {eateryCard.building} {eateryCard.street}, {eateryCard.boro}{' '}
              {eateryCard.zipcode} <br />
              Phone: {eateryCard.phone} <br />
              Violation Description: {eateryCard.violation_description} <br />
            </Card.Text>
          <Button variant="primary">
            Go somewhere
          </Button>
         </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Last updated: {eateryCard.grade_date}
            </small>
          </Card.Footer>
        </Card>
</div>
    ));

    return (
      <Fragment>
                
        <div className="container-fluid">
            <h1 className='display-4 text-center'>
              New York Health Inspection Results
            </h1>               
          <div className="eatery-container">          
           <div className="eatery-grades-container">
            <div className="eatery-row">
               <CardGroup>
               
 
                <div>{eateryCards}</div>
                
                </CardGroup>
                </div>
            </div>
          <div className="eatery-map-container">
         
          </div>

         </div>
    
        </div>      
      </Fragment>
    ); //end return
  } //end render
} //end class EateriesComponent

const mapStateToProps = state => ({
  eateriesGrades: state.eateries.eateriesGrades
});

export default connect(
  mapStateToProps,
  { fetchEateriesGrades }
)(EateriesContainer);
