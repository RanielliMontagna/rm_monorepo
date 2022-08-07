import * as React from 'react';
import type { IDrawerContext, ISubMenuState } from '../drawer.types';

const DrawerContext = React.createContext({} as IDrawerContext);

const DrawerProvider = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
  const [subMenu, setSubMenu] = React.useState<ISubMenuState>({ open: false });
  const [positionSubMenu, setPositionSubMenu] = React.useState(-200);

  return (
    <DrawerContext.Provider
      value={{
        subMenu,
        setSubMenu,
        positionSubMenu,
        setPositionSubMenu,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawerContext = () => {
  const context = React.useContext<IDrawerContext>(DrawerContext);

  if (!context) {
    throw new Error('<Drawer /> Não foi possível acessar o DrawerContext.');
  }

  return context;
};

export { DrawerContext, DrawerProvider, useDrawerContext };
