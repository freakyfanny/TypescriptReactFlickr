import React from 'react'
//import * as TestUtils from 'react-addons-test-utils'
import { Hello } from '../components/hello'
import renderer from 'react-test-renderer'

/*describe('<Hello />', () => {
  it('renders', () => {
    expect(TestUtils.createRenderer().render(
      <Hello compiler="TypeScript" framework="React" />
    )).toMatchSnapshot()
  })
});*/

describe('<Hello />', () => {
    it('renders correctly', () => {
      const hello = renderer.create(
          <Hello compiler="TypeScript" framework="React" />
        ).toJSON();
      expect(hello).toMatchSnapshot();
    })
});
