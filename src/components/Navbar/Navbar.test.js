import React from 'react';
import { shallow } from 'enzyme'

import Navbar from './Navbar'
import { findByTestAttribute } from '../../test/test.utils'


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

describe('expect intial hidden state to be true', ()=>{
  let wrapper
  beforeEach(()=>{
    wrapper = setup()
  })
  test('state hidden equals true', ()=>{
    expect(wrapper.state('hidden')).toEqual(true)
  })
  test('expect web version to be active as hidden is true', ()=>{
    const toggler = findByTestAttribute(wrapper, 'web')
  
    expect(toggler).toHaveLength(1)
  })

})

describe('clicking button changes hidden state', ()=>{
  let wrapper,
  button
  beforeEach(()=>{
    wrapper=setup()
    button = findByTestAttribute(wrapper, 'navbar-mobile-menu-button')
    button.simulate('click')
    wrapper.update()
  })
  
  test('mobile version is present', ()=>{
    const toggler = findByTestAttribute(wrapper, 'mobile')
    expect(toggler).toHaveLength(1)
  })
  test('click on mobile hamburger menu btton switches state to false', ()=>{
    expect(wrapper.state('hidden')).toEqual(false)
  }) 
})



