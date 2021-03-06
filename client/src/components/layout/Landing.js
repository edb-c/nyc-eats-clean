import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {

  // if (isAuthenticated) {
 //   return <Redirect to='/favorites' />;
 // }
  return (
    <section className='landing'>

        <div className='landing-inner'>
          <h1 className='large'>(STILL IN DEVELOPMENT) - Eat Clean In</h1>
         </div>
         <p className='text-center'> 
         Find the New York City Health Inspection Grades of the eateries near you. Create an Account to save your favorite places!
         <br />
         Made with <span className='hearts'>&hearts;</span> by <a href='http://the.ethelcofresi.com/'>E.Cofresi</a></p>

     </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);