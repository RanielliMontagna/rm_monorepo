import { MenuItem } from '@szhsin/react-menu';

import { Menu, MenuItemConteudo } from '../../../../menu/src/menu';
import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: Menu,
  title: 'Design System/Menu',
};

export const menu = () => (
  <ThemeProvider>
    <Menu menuButton={<div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>clique aqui</div>}>
      <>
        <MenuItem onClick={() => alert('clicou aqui')}>{MenuItemConteudo('texto', <>i</>)}</MenuItem>
      </>
    </Menu>
  </ThemeProvider>
);

export const menuWithDifferenteTheme = () => (
  <ThemeProvider
    theme={{
      menu: {
        background: 'red',
        foreground: 'white',
      },
    }}
  >
    <Menu menuButton={<div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>clique aqui</div>}>
      <>
        <MenuItem onClick={() => alert('clicou aqui')}>{MenuItemConteudo('texto', <>i</>)}</MenuItem>
      </>
    </Menu>
  </ThemeProvider>
);
