import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Typography from './typography';

describe('Typography', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Typography>teste</Typography>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
