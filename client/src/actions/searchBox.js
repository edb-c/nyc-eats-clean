import {
    CHANGE_SEARCHFIELD,
   } from '../actions/types';

export const setSearchField = (text) => ({ 
    type: CHANGE_SEARCHFIELD, payload: text 
})