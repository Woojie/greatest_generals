import { combineReducers } from 'redux'

import { generalListReducers } from "./generals";

export const combinedRedcuers = combineReducers({
  theList: generalListReducers
})