import { FC } from 'react';

import * as styled from './menu.styles';
import { MenuProps as MenuPropsSzhsin } from '@szhsin/react-menu';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export interface MenuProps extends MenuPropsSzhsin {
  children: JSX.Element;
}

export const MenuItemConteudo = (titulo: string, icone?: JSX.Element) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {icone && <styled.MenuItemIcone>{icone}</styled.MenuItemIcone>}
      <div style={{ margin: '0px 8px' }}>
        <styled.MenuItemTitulo>{titulo}</styled.MenuItemTitulo>
      </div>
    </div>
  );
};

export const Menu: FC<MenuProps> = ({ menuButton, align, offsetY, offsetX, children }) => {
  return (
    <styled.Menu menuButton={menuButton} align={align} offsetY={offsetY} offsetX={offsetX} arrow transition>
      {children}
    </styled.Menu>
  );
};
