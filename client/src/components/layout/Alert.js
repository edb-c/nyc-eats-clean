import React from 'react';
//PropTypes exports a range of validators that can be used to make sure the data you receive is valid.When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>

  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
//Map Redux State to prop to access, here is an array of alerts
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
