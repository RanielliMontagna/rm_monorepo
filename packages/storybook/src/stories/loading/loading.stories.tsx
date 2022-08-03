import React from 'react';
import Loading from '../../../../loading/src/loading';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: Loading,
  title: 'Design System/Loading',
};

export const withTheme = () => (
  <ThemeProvider>
    <Loading />
  </ThemeProvider>
);

export const withoutTheme = () => <Loading />;
