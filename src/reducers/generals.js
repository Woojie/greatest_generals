import { generalList } from '../api/generalList'

import { types } from "../action_types";

const generals = {
  generalList,
  activeGeneral: {}
}

export const generalListReducers = (state=generals, { type, id }) => {
  if(type === types.WATCH_ACTIVE_GENERAL) {
    return {
      ...state
    }
  }else if(type === types.SELECT_ACTIVE_GENERAL) {
    return {
      ...state,
      activeGeneral: state.generalList.find(general=>general.id === Number(id))
    }
  }
  return state
}
