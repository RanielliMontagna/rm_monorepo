import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Button from '../src';

it('is accessible', async () => {
  const { container } = render(<Button>text</Button>);
  expect(await axe(container)).toHaveNoViolations();
});

it('renders button with text', () => {
  const text = 'text';
  render(<Button>{text}</Button>);
  expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
});

it('renders button with prop hidden', () => {
  render(<Button hide>text</Button>);
});

it('renders button with prop color', () => {
  render(<Button color="#f1241">text</Button>);
});

it('renders button with prop fullWidth', () => {
  render(<Button fullWidth>text</Button>);
});

it('renders button with prop size', () => {
  render(<Button size="lg">text</Button>);
});

it('renders button with prop type', () => {
  render(<Button type="submit">text</Button>);
});

it('renders button with prop variant', () => {
  render(<Button variant="dashed">text</Button>);
});
