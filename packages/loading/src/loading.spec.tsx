import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Loading from './loading';

describe('Loading', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
