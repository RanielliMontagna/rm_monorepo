import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Modal } from '../src';
import ThemeProvider from '../../themeProvider/src/themeProvider';

it('is accessible', async () => {
  const { container } = render(
    <ThemeProvider>
      <Modal
        open
        onClose={() => {
          // function to close modal
        }}
        titulo="Modal"
        size="md"
        footer={{
          botaoPrimario: {
            children: 'Confirmar',
            onClick: () => {
              // function to confirm
            },
          },
          botaoSecundario: {
            children: 'Cancelar',
            onClick: () => {
              // function to cancel
            },
          },
          extra: <div>Extra</div>,
        }}
      >
        <p>Modal content</p>
      </Modal>
    </ThemeProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('modal with open prop false', async () => {
  const { container } = render(
    <Modal
      open={false}
      onClose={() => {
        // function to close modal
      }}
      titulo="Modal"
    >
      <p>Modal content</p>
    </Modal>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('modal with footer extra', async () => {
  const { container } = render(
    <Modal open={false} onClose={() => null} size="sm" titulo="Modal">
      <p>Modal content</p>
    </Modal>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('modal with size sm', async () => {
  const { container } = render(
    <Modal open={false} onClose={() => null} size="sm" titulo="Modal">
      <p>Modal content</p>
    </Modal>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it('modal with size lg', async () => {
  const { container } = render(
    <Modal open={false} onClose={() => null} size="lg" titulo="Modal">
      <p>Modal content</p>
    </Modal>
  );
  expect(await axe(container)).toHaveNoViolations();
});
