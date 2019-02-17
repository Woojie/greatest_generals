import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Navbar from './Navbar'
import { findByTestAttribute } from '../../test/test.utils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}, state=null) => {
  const wrapper = shallow(<Navbar {...props} />)
  if (state) wrapper.setState(state)
  return wrapper 
}

test('renders without crashing', () => {
  const wrapper = setup()
  const navbarComponent =findByTestAttribute(wrapper, 'navbar-component')
  expect(navbarComponent.length).toBe(1)
});

test('expect inital hidden state to be true', () => {
  const wrapper=setup()
  const toggler = findByTestAttribute(wrapper, 'web')

  expect(wrapper.state('hidden')).toEqual(true)
  expect(toggler).toHaveLength(1)

})

test('clicking button changes hidden state (for mobile nav)', ()=>{
  const wrapper = setup()

  //find buttons
  const button = findByTestAttribute(wrapper, 'navbar-mobile-menu-button')
  button.simulate('click')
  wrapper.update()

  //make sure mobile version is on when button is pressed
  const toggler = findByTestAttribute(wrapper, 'mobile')
  expect(toggler).toHaveLength(1)
  expect(wrapper.state('hidden')).toEqual(false)
  
})

