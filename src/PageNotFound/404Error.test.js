import React from 'react';
import { shallow } from 'enzyme'

import PageNotFound from './404Error';
import { findByTestAttribute } from '../test/test.utils'


const setup = (props={}, state=null) => {
  return shallow(<PageNotFound {...props} />)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const notFoundComponent =findByTestAttribute(wrapper, 'notfound-component')
  expect(notFoundComponent.length).toBe(1)
});
