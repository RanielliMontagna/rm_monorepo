import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Loading from '../src';
import ThemeProvider from '../../themeProvider/src';

it('is accessible', async () => {
  const { container } = render(
    <ThemeProvider>
      <Loading />
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
