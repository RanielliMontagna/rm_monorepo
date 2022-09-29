import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { createTheme, StyledEngineProvider, ThemeProvider as ThemeProviderMui } from '@mui/material';

import { defaultTheme } from './defaultTheme';

import type { IThemeProvider } from './themeProvider.types';

const ThemeProvider = ({ theme, children }: IThemeProvider) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProviderSC
        theme={{
          ...defaultTheme,
          ...theme,
        }}
      >
        <ThemeProviderMui theme={createTheme()}>{children}</ThemeProviderMui>
      </ThemeProviderSC>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
