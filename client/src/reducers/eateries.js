import { FETCH_EATERIES } from '../actions/types';

const initialState = {
  eateries: []
};

export default (state=initialState, action) => {

console.log("fetch" + action.type + "state" + state);
  switch (action.type) {
    case FETCH_EATERIES:
      return {
        ...state, 
        loading: false, 
        eateries: action.payload
      }
    default:
      return state
  }
};