import { FETCH_EATERIES_GRADES } from '../actions/types';


const initialState = {
  eateriesGrades: [],
};
export default (state=initialState, action) => {
  console.log("Eateries Reducer-action.type is ", action.type);
  
  switch (action.type) {
    case FETCH_EATERIES_GRADES:
      return {        
        ...state, 
        loading: false, 
        eateriesGrades: action.payload
      
      }
    default:
      return state
  }
};
