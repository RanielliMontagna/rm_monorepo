import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { AppBar } from '../src';
import ThemerProvider from '../../themeProvider/src/themeProvider';

it('is accessible', async () => {
  const { container } = render(
    <ThemerProvider>
      <AppBar>
        <></>
      </AppBar>
    </ThemerProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('appBar with leftSide', async () => {
  const { container } = render(
    <ThemerProvider>
      <AppBar>
        <AppBar.LeftSide>LeftSide</AppBar.LeftSide>
      </AppBar>
    </ThemerProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('appBar with rightSide', async () => {
  const { container } = render(
    <ThemerProvider>
      <AppBar>
        <AppBar.RightSide>RightSide</AppBar.RightSide>
      </AppBar>
    </ThemerProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
