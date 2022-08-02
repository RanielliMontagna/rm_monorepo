import React from 'react';
import ThemeProvider from '../../../../themeProvider';

export default {
  component: ThemeProvider,
  title: 'Design System/ThemeProvider',
};

export const padrao = () => (
  <ThemeProvider>
    <div>div dentro do ThemeProvider</div>
  </ThemeProvider>
);
