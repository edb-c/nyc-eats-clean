import {
    CHANGE_SEARCHFIELD
   } from '../actions/types';

const initialStateSearch = {
    searchField: ''
  }

export const searchEateries = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
      default:
        return state
    }
  }  