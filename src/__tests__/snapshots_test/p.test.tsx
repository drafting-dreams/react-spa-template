import React from 'react'
import P from '@/components/P'
import renderer from 'react-test-renderer'

test('Login page render', () => {
  const component = renderer.create(<P />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
