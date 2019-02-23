import { activeGeneral } from './actions.js'
import { types } from "./action_types";

describe('activeGeneral action', () => {
  let idParams, action
  beforeEach(()=>{
    idParams = 'hello'
    action = activeGeneral(idParams)
  })
  test('activeGeneral calls watch active general', () => {
    expect(action.type).toEqual(types.WATCH_ACTIVE_GENERAL)
  })
  test('activegeneral passes params properly as id', () => {
    expect(action.id).toEqual(idParams)
  })
})