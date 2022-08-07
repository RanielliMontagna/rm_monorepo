import * as React from 'react';
import { Tooltip } from '@mui/material';

import type { IDrawerItem } from '../drawer.types';
import { DrawerItem } from '../drawer.styles';
import { useDrawerContext } from '../drawerContext/drawerContext';

const Item = ({ children, icon, path, onClick, options }: IDrawerItem) => {
  const { subMenu, setSubMenu, setPositionSubMenu } = useDrawerContext();

  const _selecionado = () => {
    if (path === window.location.pathname) return true;
    return false;
  };

  const _handleOpenSubMenu = () => {
    setSubMenu({
      open: true,
      name: children,
      options,
    });
  };

  const _handleOnClick = (event?: React.MouseEvent<HTMLDivElement>) => {
    if (subMenu.open) {
      setPositionSubMenu(-200);
      setTimeout(() => setSubMenu({ open: false }), 250);
    }
    if (onClick && event) {
      onClick(event);
    }
  };

  return (
    <>
      <Tooltip title={<div style={{ fontSize: '16px' }}>{children}</div>} placement="right" arrow>
        <DrawerItem onClick={!options ? _handleOnClick : _handleOpenSubMenu} selecionado={_selecionado()}>
          {icon}
        </DrawerItem>
      </Tooltip>
    </>
  );
};

export default React.memo(Item);
