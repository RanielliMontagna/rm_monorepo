import { AppBar } from '../../../../appBar/src';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: AppBar,
  title: 'Design System/AppBar',
};

export const Default = () => {
  return (
    <ThemeProvider>
      <AppBar>
        <AppBar.LeftSide>coisas a esquerda</AppBar.LeftSide>
        <AppBar.RightSide>coisas a direita</AppBar.RightSide>
      </AppBar>
    </ThemeProvider>
  );
};
