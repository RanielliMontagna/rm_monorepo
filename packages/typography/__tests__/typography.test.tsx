import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Typography } from '../src';

it('is accessible', async () => {
  const { container } = render(<Typography>texto</Typography>);
  expect(await axe(container)).toHaveNoViolations();
});
