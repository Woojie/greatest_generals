import checkPropTypes from 'check-prop-types'

/**
 * Returns ShallowWrapper containing node(s) wit given data-test value.
 * @param {ShallowWrapper} wrapper = enzyme shallows
 * @param {sring} val = value of the data-test 
 * @returns {ShallowWrapper}
 */

export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name 
    )
  expect(propError).toBeUndefined()
}