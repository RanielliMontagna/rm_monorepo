import Loading from '../../../../loading';
import ThemeProvider from '../../../../themeProvider';

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
