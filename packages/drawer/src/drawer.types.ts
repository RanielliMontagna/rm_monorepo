import React, { ReactNode } from 'react';

export interface IDrawer {
  children: ReactNode;
}

export interface IDrawerHeader {
  children: ReactNode;
  onClick?: React.MouseEventHandler;
  color?: string;
}

export interface IDrawerContent {
  children: ReactNode;
  color?: string;
}

export interface IDrawerItemOptions {
  name: string;
  path?: string;
  onClick?: React.MouseEventHandler;
}

export interface ISubMenuState {
  open: boolean;
  name?: React.ReactNode;
  options?: IDrawerItemOptions[];
}

export interface IDrawerContext {
  subMenu: ISubMenuState;
  setSubMenu: React.Dispatch<React.SetStateAction<ISubMenuState>>;
  positionSubMenu: number;
  setPositionSubMenu: React.Dispatch<React.SetStateAction<number>>;
}

export interface IDrawerItem {
  children: string;
  icon: React.ReactElement;
  path?: string;
  onClick?: React.MouseEventHandler;
  options?: IDrawerItemOptions[];
}
