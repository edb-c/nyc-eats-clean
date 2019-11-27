import React, { Component, Fragment } from "react";
//import EateryCard from '/EateryCard';
import GoogleMap from "./Map";
import { CardDeck, Card, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { fetchEateriesGrades } from "../actions/eatery";

class EateriesContainer extends Component {
  componentDidMount() {
    this.props.fetchEateriesGrades();
  }
  render() {
   
    const eateryCards = this.props.eateriesGrades.map(eateryCard => (
      <div className="card">
         <div className="card-header">
         <a href="#" class="card-link">{eateryCard.dba}</a><br />
            Grade: {eateryCard.grade}                    
          </div>                 
          <div className="card-text">
              Cuisine: {eateryCard.cuisine_description} <br />
              Address: {eateryCard.building} {eateryCard.street}, 
              {eateryCard.boro}
              {" "}
              {eateryCard.zipcode} <br />
              Phone: {eateryCard.phone} <br />
              Violation Description: 
              {eateryCard.violation_description} <br />
          </div>
          <div class="card-text"><small class="text-muted">Last updated {eateryCard.grade_date}</small></div>
      </div>  
    ));

    return (
      <Fragment>
                
        <div className="container-fluid">
          <h1 className="display-4 text-center">
            New York Health Inspection Results
          </h1>
          <div className="cards">     
              {eateryCards}            
          </div>
        </div>
              
      </Fragment>
    ); //end return
  } //end render
} //end class EateriesComponent

const mapStateToProps = state => ({
  eateriesGrades: state.eateries.eateriesGrades
});

export default connect(mapStateToProps, { fetchEateriesGrades })(
  EateriesContainer
);
