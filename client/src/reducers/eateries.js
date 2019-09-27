import { FETCH_EATERIES_GRADES } from '../actions/types';

const initialState = {
  eateriesGrades: []
};
console.log("Eateries Reducer");
export default (state=initialState, action) => {

  switch (action.type) {

    case FETCH_EATERIES_GRADES:
      console.log("case FETCH_EATERIES_GRADES");
    //  console.log(action.payload)
      return {
        ...state, 
        loading: false, 
        eateriesGrades: action.payload
      
      }
    default:
      return state
  }
};