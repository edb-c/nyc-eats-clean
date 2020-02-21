import axios from 'axios';
import { FETCH_EATERIES_GRADES, FETCH_EATERIES_ERROR } from './types';

// FETCH EATERIES GRADES
export const fetchEateriesGrades = () => async dispatch => {
  console.log("Eatery Action - fetchEateriesGrades");
  try {
    //const response = await axios.get('/api/eateries/grades');
    const response = await axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json?$SELECT=DISTINCT dba,boro,building,street, zipcode, phone, cuisine_description,grade, grade_date, latitude, longitude, violation_description WHERE grade <> "" LIMIT 10');
    dispatch({
      type: FETCH_EATERIES_GRADES,
      payload: response.data
     
    });
  } catch (err) {
    dispatch({
      type: FETCH_EATERIES_ERROR,
      payload: { msg: err}
    });
  }
};