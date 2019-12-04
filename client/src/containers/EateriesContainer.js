import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEateriesGrades } from '../actions/eatery';
//import Spinner from './layout/Spinner';
import EateryList from '../components/EateryList';
import EateryCard from '../components/EateryCard';

const EateriesContainer = ({ 
  fetchEateriesGrades, 
  eateries: { eateriesGrades }

}) => {
  useEffect(() => {
    fetchEateriesGrades();},
    [fetchEateriesGrades]);

 // {eateriesGrades.map(eateryGrade => <div>{eateryGrade.dba}</div>)} 
  console.log("edbc - EateriesContainer COMPONENT");
return(
    <Fragment>
 
  <EateryList eateriesGrades={eateriesGrades} />
  <EateryCard eateriesGrades={eateriesGrades} />
    </Fragment>
)
};

EateriesContainer.propTypes = { 
  fetchEateriesGrades: PropTypes.func.isRequired,
  eateries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 //eateriesGrades: state.eateries.eateriesGrades,
 eateries: state.eateries
});

export default connect(
  mapStateToProps,
  { fetchEateriesGrades }
)(EateriesContainer);

 