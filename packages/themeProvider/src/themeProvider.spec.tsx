import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ThemeProvider from './themeProvider';

describe('ThemeProvider', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ThemeProvider />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
