import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import ThemeProvider from '../src';

it('is accessible', async () => {
  const { container } = render(
    <ThemeProvider>
      <></>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
