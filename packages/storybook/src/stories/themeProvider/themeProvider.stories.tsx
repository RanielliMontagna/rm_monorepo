import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: ThemeProvider,
  title: 'Design System/ThemeProvider',
};

export const padrao = () => (
  <ThemeProvider>
    <div>div dentro do ThemeProvider</div>
  </ThemeProvider>
);
