import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


//Functional Component using React Hook - useState
//Destructured, instead of (props) - props.SetAlert, etc.
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    //default values
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    
    e.preventDefault();

    if (password !== password2) {
      console.log('Passwords do not match');
    
      setAlert('Passwords do not match', 'danger');
  
    } else {
      
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  };
  
  return (
    <Fragment>
      <div className='login_register_page'>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">

              <h1 className="display-4 text-center">Register for an Account</h1>
              <p className='lead text-center'>
                <i className='fas fa-user' /> Create Your Account and Profile
              </p>
              <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                  <input
                    className="form-control form-control-lg"
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                  className="form-control form-control-lg"
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    className="form-control form-control-lg"
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    className="form-control form-control-lg"
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    value={password2}
                    onChange={e => onChange(e)}
                  />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
              </form>
             </div>
          </div>
        </div>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
     </div> 
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register); 
