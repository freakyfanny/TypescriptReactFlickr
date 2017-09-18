import React from 'react'
import { Hello } from '../components/hello'
import renderer from 'react-test-renderer'

describe('<Hello />', () => {
    it('renders correctly', () => {
      const hello = renderer.create(
          <Hello compiler="TypeScript" framework="React" />
        ).toJSON();
      expect(hello).toMatchSnapshot();
    })
});
