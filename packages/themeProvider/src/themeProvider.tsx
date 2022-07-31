import React, { memo } from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { defaultTheme } from './defaultTheme';

import type { IThemeProvider } from './themeProvider.types';

export const ThemeProvider = ({ children, theme }: IThemeProvider) => {
  return (
    <ThemeProviderSC
      theme={{
        ...defaultTheme,
        ...theme,
      }}
    >
      {children}
    </ThemeProviderSC>
  );
};

export default memo(ThemeProvider);
