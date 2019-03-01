import { types } from "../action_types";
import { generalListReducers } from "./generals";
import { generalList } from "../api/generalList";

describe('testing the `generalListReducers` reducer', () => {

  test('returns the default state if no actions are being done', () => {
    const newState = generalListReducers(undefined, {type: null, id: 1})
    expect(newState.generalList).toBe(generalList)
    expect(newState.activeGeneral).toEqual({})
  })

  test('`WATCH_ACTIVE_GENERAL` resets activeGeneral state to empty object', () => {
    const newState = generalListReducers(undefined, {type: types.WATCH_ACTIVE_GENERAL})
    expect(newState.activeGeneral).toEqual({})
  })
  test('`SELECT_ACTIVE_GENERAL` alters activeGeneral depending on the id', () => {
    const newState = generalListReducers(undefined, {type: types.SELECT_ACTIVE_GENERAL, id: 1})
    expect(newState.activeGeneral).toEqual(generalList[0])
    
  })
})
