import React, { Component, Fragment } from 'react';
//import EateryCard from '../components/EateryCard';
//import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { fetchEateriesGrades } from '../actions/eatery';
import store from '../store';

class EateriesContainer extends Component {
  componentWillMount() {
    //const eateriesGrades = this.setState.fetchEateriesGrades();
    // const eateriesGrades = store.dispatch(fetchEateriesGrades());
    this.props.fetchEateriesGrades();
    console.log('EateriesContainer ' + this.props.fetchEateriesGrades);
  }

  render() {
    const grades = this.props.eateriesGrades.map(grade => (
      <div key={grade.id}>{grade.dba}</div>
    ));
    return (
      <Fragment>
                
        <div>
                    
          <center>
                        
            <br />
                        
            <h1 className='display-4 text-center'>
              New York Health Inspection Results
            </h1>
                        
            <br />
                      
          </center>
                  
        </div>
              
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <div>{grades}</div>
                      {' '}
            </div>
                {' '}
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
