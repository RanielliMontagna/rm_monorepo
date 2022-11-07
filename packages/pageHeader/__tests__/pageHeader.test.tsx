import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { PageHeader } from '../src';
import ThemeProvider from '../../themeProvider/src/themeProvider';

it('is accessible', async () => {
  const { container } = render(
    <ThemeProvider>
      <PageHeader
        titulo="teste"
        button={{
          children: 'teste',
        }}
        right={<>espaço na direita</>}
      />
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
