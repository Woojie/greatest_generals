import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from '../App';
import { findByTestAttribute } from './test.utils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * factory function to create shallow wrapper for App Component
 * @function setup
 * @param {object} props : from redux
 * @retrns wrapper
 */

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent =findByTestAttribute(wrapper, 'app-component')
  expect(appComponent.length).toBe(1)
});
