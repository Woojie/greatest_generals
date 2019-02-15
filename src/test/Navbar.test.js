import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Navbar from '../components/Navbar'
import { findByTestAttribute } from './test.utils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}, state=null) => {
  return shallow(<Navbar {...props} />)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const navbarComponent =findByTestAttribute(wrapper, 'navbar-component')
  expect(navbarComponent.length).toBe(1)
});

test('expect inital hidden state to be true', () => {
  const wrapper=(setup())
  expect(wrapper.state('hidden')).toEqual(true)
})

test('clicking button changes hidden state (for mobile nav)', ()=>{
  
})