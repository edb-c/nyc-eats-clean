import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../actions/profile';
import Spinner from './layout/Spinner';

const Favorites = ({ 
  getCurrentProfile, 
  auth: { user },
  profile: { profile, loading }

}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]); 
  
  console.log("edbc - favorites COMPONENT");
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
   <div className='favorites'>

      <h1 className='large text-primary'>My Favorites</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
     
     
      </p>
      {profile !== null ? (

        <Fragment>
          {profile.bio}
      <div className='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      </div>
          <div className='my-2'>
      <button className='btn btn-danger' onClick={() => deleteAccount()}>
          <i className='fas fa-user-minus' /> Delete My Account
      </button>
          </div>
    </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
  </div>
    </Fragment>
  );
};

Favorites.propTypes = { 
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Favorites);
