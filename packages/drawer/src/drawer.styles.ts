import React from 'react';
import styled, { css } from 'styled-components';
import { IDrawerHeader } from './drawer.types';

export const DrawerContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme?.palette?.secondary?.color};
`;

export const DrawerDefaultCointainer = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.palette?.secondary?.color};
  position: relative;
  z-index: 1;
`;

export const DrawerHeader = styled.div<IDrawerHeader>`
  height: 60px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.24);
  background-color: ${({ theme, color }) => {
    if (color) return color;
    if (theme) return theme?.cores.primaria;
    return;
  }};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const DrawerContent = styled.div`
  flex: 1;
  background-color: ${({ color, theme }) => color ?? theme?.cores.primaria ?? 'transparent'};
  box-shadow: inset 0 10px 9px -7px rgba(0, 0, 0, 0.3);
  padding-top: 12px;
`;

const hoverItem = (onClick?: React.MouseEventHandler) => css`
  cursor: ${onClick ? 'pointer' : 'default'};
  transition: all 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const DrawerItem = styled.div<{ selecionado: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  transition: all 0.3s ease-in-out;
  color: white;

  background-color: ${({ selecionado }) => selecionado && 'rgb(0, 0, 0, 0.2)'};

  font-size: 24px;

  &:hover {
    ${({ onClick, selecionado }) => !selecionado && hoverItem(onClick)};
  }
`;
