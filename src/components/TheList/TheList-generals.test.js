import React from 'react'
import { shallow } from "enzyme";

import { findByTestAttribute, checkProps } from '../../test/test.utils'
import Generals from './generals'

const defaultProps = {
  name: 'string',
  rank: 0,
  portrait: 'string',
  nationality: 'string'
}

const setup = (props=defaultProps, state=null) => {
  const wrapper = shallow(<Generals {...props} />)
  return wrapper 
}

test('renders without crashing', () => {
  const wrapper = setup()
  const generalsComponent = findByTestAttribute(wrapper, 'generals-component')
  expect(generalsComponent.length).toBe(1)
})

test('proper props pass prop-tyes check', ()=>{
  checkProps(Generals, defaultProps)
})