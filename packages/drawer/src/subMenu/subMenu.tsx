import React, { useEffect } from 'react';

import { IDrawerItemOptions } from '../drawer.types';
import { SubMenuContainer, SubMenuHeader, SubMenuItem } from './subMenu.styles';
import { useDrawerContext } from '../drawerContext/drawerContext';
import { MdClose } from 'react-icons/md';

interface ISubMenu {
  name: React.ReactNode;
  options: IDrawerItemOptions[];
}

const SubMenu = ({ options, name }: ISubMenu) => {
  const { setSubMenu, positionSubMenu, setPositionSubMenu } = useDrawerContext();

  useEffect(() => {
    setTimeout(() => setPositionSubMenu(0), 0);
  }, []);

  const _handleCloseSubMenu = () => {
    setPositionSubMenu(-200);
    setTimeout(() => setSubMenu({ open: false }), 250);
  };

  return (
    <SubMenuContainer position={positionSubMenu}>
      <SubMenuHeader>
        <div>
          <h4>{name}</h4>
        </div>
        <div onClick={_handleCloseSubMenu}>
          <MdClose size={18} />
        </div>
      </SubMenuHeader>
      <div>
        {options?.map((option) => {
          return (
            <SubMenuItem
              path={option.path}
              onClick={(e) => {
                option.onClick && option.onClick(e);
                _handleCloseSubMenu();
              }}
            >
              {option.name}
            </SubMenuItem>
          );
        })}
      </div>
    </SubMenuContainer>
  );
};

export default SubMenu;
