/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { DrawerContainer, DrawerDefaultCointainer } from './drawer.styles';
import type { IDrawer } from './drawer.types';

import Header from './header/header';
import Content from './content/content';
import Item from './item/item';
import SubMenu from './subMenu/subMenu';
import { DrawerProvider, useDrawerContext } from './drawerContext/drawerContext';

const DrawerWithoutMemo: React.FC<IDrawer> = ({ children }) => {
  const { subMenu } = useDrawerContext();

  const _header = React.useMemo(() => {
    return React.Children?.toArray(children)?.filter((child: any) => child?.type === Header);
  }, [children]);

  const _content = React.useMemo(() => {
    return React.Children?.toArray(children)?.find((child: any) => child?.type === Content);
  }, [children]);

  return (
    <DrawerContainer>
      <DrawerDefaultCointainer>
        {_header}
        {_content}
      </DrawerDefaultCointainer>
      {subMenu.open && <SubMenu name={subMenu.name} options={subMenu.options || []} />}
    </DrawerContainer>
  );
};

const DrawerWrapper: React.FC<IDrawer> = (props) => (
  <DrawerProvider>
    <DrawerWithoutMemo {...props} />
  </DrawerProvider>
);

const Drawer = React.memo(DrawerWrapper) as React.NamedExoticComponent<IDrawer> & {
  Header: React.ComponentType<React.ComponentProps<typeof Header>>;
  Content: React.ComponentType<React.ComponentProps<typeof Content>>;
  Item: React.ComponentType<React.ComponentProps<typeof Item>>;
};

Drawer.Header = Header;
Drawer.Content = Content;
Drawer.Item = Item;

export default Drawer;
