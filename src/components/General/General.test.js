import React from 'react'
import { shallow } from "enzyme";

import { findByTestAttribute } from '../../test/test.utils'
import General from './index'
import { watchActiveGeneral } from "../../saga/activeGeneral";

const defaultProps = {
  general: {object:""}
}


const setup = (initialState={}) => {
  return shallow(<General />)
}


describe("render", () => {
  describe("re-directed to this page", () => {
    test('renders without error', () => {
      const wrapper = setup()
      const appComponent =findByTestAttribute(wrapper, 'General-component')
      console.log(appComponent.debug())
    })
    test('renders the changed title', () => {

    })
  })
})

describe("state", () => {

})