import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Menu, MenuItemConteudo } from '../src';
import ThemeProvider from '../../themeProvider/src/themeProvider';

it('is accessible', async () => {
  const { container } = render(
    <ThemeProvider>
      <Menu menuButton={<>teste</>}>{MenuItemConteudo('Item 1', <>icone</>)}</Menu>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
