import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: ThemeProvider,
  title: 'Design System/ThemeProvider',
};

export const padrao = () => (
  <ThemeProvider>
    <div>div dentro do ThemeProvider</div>
  </ThemeProvider>
);

export const withTheme = () => (
  <ThemeProvider
    theme={{
      fontes: {
        xl: '24px',
        lg: '20px',
        md: '16px',
        sm: '14px',
        xs: '12px',
      },
      appBar: {
        background: 'red',
        foreground: 'blue',
      },
      modal: {
        background: 'red',
        foreground: 'blue',
      },
      menu: {
        background: 'red',
        foreground: 'blue',
      },
      cores: {
        primaria: '#000',
        secundaria: '#fff',
        terciaria: '#ccc',
      },
      coresExtras: {
        tantofaz: '#000',
      },
      coresUtilitarias: {
        danger: '#cc0000',
        success: '#00cc00',
        warning: '#cccc00',
      },
    }}
  >
    <div>div dentro do ThemeProvider</div>
  </ThemeProvider>
);
