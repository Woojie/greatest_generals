import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound';
import { findByTestAttribute } from './test/test.utils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}, state=null) => {
  return shallow(<NotFound {...props} />)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const notFoundComponent =findByTestAttribute(wrapper, 'notfound-component')
  expect(notFoundComponent.length).toBe(1)
});
