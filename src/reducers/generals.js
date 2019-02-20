import { generalList } from '../api/generalList'

import { WATCH_ACTIVE_GENERAL, SELECT_ACTIVE_GENERAL } from "../action_creator";

const generals = {
  generalList,
  activeGeneral: {}
}

export const generalListReducers = (state=generals, { type, id }) => {
  if(type === WATCH_ACTIVE_GENERAL) {
    return {
      ...state
    }
  }else if(type === SELECT_ACTIVE_GENERAL) {
    return {
      ...state,
      activeGeneral: state.generalList.find(general=>general.id === Number(id))
    }
  }
  return state
}
