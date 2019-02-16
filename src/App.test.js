import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router'

import App from './App';
import { findByTestAttribute } from './test/test.utils'

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

test('non-existent path should redirect to 404', ()=> {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/randomRoute' ]} initialIndex={0}>
      <App />
    </MemoryRouter>
  )
  expect(wrapper.find('PageDoesNotExist').exists()).toBe(true)
})
