import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './layout/Spinner';
import Card from 'react-bootstrap/Card';
import { fetchEateries } from '../actions/eatery';


const EateriesList = ({ fetchEateries, eatery: { eateries, loading } }) => {
  useEffect(() => {
    fetchEateries();
  }, [fetchEateries]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Parents</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            Parents
          </p>
          <div className='profiles'>
            {eateries.length > 0 ? (
              eateries.map(eatery => (
                <Card key={eatery._id} eatery={eatery} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

EateriesList.propTypes = {
  fetchEateries: PropTypes.func.isRequired,
  eatery: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eatery: state.eatery
});

export default connect(
  mapStateToProps,
  { fetchEateries }
)(EateriesList);
