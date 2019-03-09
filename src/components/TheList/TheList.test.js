import React from 'react'
import { shallow } from "enzyme";

import { findByTestAttribute } from '../../test/test.utils'
import TheList from './index'

const setup = (props={}, state=null) => {
  const wrapper = shallow(<TheList {...props} />)
  return wrapper 
}

test('make sure everything renders', () => {
  const wrapper = setup()
  console.log(wrapper.debug())
  const theListComponent = findByTestAttribute(wrapper, "thelist-component")
  expect(theListComponent.length).toBe(1)
  
})
