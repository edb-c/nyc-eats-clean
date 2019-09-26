import axios from 'axios';
import { FETCH_EATERIES, FETCH_EATERIES_ERROR } from './types';


//const ROOT_URL = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json';
//const API_KEY = '?key=j';


// FETCH EATERIES
export const fetchEateries = () => async dispatch => {
     
    try {
      const res = await axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json');
      console.log(res);
 
      dispatch({
        
        type: FETCH_EATERIES,
        payload: res.data 
      });
    } catch (err) {
      dispatch({
        type: FETCH_EATERIES_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };