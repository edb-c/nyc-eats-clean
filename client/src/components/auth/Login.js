import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({login, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/favorites' />;
  };

  return (
    <Fragment>
      <div className='login_register_page'>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Login to Your Account</h1>

              <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                  <input
                    className="form-control form-control-lg"
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
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
                    minLength='6'
                  />
                </div>
                <input type='submit' className='btn btn-primary' value='Login' />
              </form>
            </div>
          </div>
        </div>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
      </div>   
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { login }
)(Login);