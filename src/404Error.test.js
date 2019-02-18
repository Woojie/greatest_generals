import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import PageNotFound from './404Error';
import { findByTestAttribute } from './test/test.utils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}, state=null) => {
  return shallow(<PageNotFound {...props} />)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const notFoundComponent =findByTestAttribute(wrapper, 'notfound-component')
  expect(notFoundComponent.length).toBe(1)
});
