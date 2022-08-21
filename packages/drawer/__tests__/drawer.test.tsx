import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Drawer } from '../src';
import { ThemeProvider } from '../../themeProvider/lib';

it('is accessible', async () => {
  const { container } = render(
    <ThemeProvider>
      <Drawer>
        <></>
      </Drawer>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('drawer with header', async () => {
  const { container } = render(
    <ThemeProvider>
      <Drawer>
        <Drawer.Header>Header</Drawer.Header>
      </Drawer>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('drawer with content', async () => {
  const { container } = render(
    <ThemeProvider>
      <Drawer>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('drawer with itens', async () => {
  const _path = window.location.pathname;

  const { container } = render(
    <ThemeProvider>
      <Drawer>
        <Drawer.Content>
          <Drawer.Item
            icon={<>icon</>}
            path="teste"
            onClick={() => {
              // do nothing
            }}
          >
            Item
          </Drawer.Item>
          <Drawer.Item
            icon={<>icon</>}
            path={_path}
            options={[
              {
                name: 'teste',
                path: 'teste',
                onClick: () => {
                  // do nothing
                },
              },
            ]}
          >
            Item 2
          </Drawer.Item>
        </Drawer.Content>
      </Drawer>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
