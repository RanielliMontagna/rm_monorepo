import styled from 'styled-components';

import type { IFontes } from '../../themeProvider/src/themeProvider.types';
import { getColor, getContrastColor } from '../../utils/src';

export const Button = styled.button<{ size: IFontes; fullWidth: boolean; color?: string }>`
  padding: 0px 16px 0 10px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme?.tamanhoFonte?.md ?? undefined};
  width: ${(props) => props?.fullWidth && '100%'};
  height: ${(props) => (props?.size === 'sm' ? '24px' : props?.size === 'md' ? '36px' : '44px')};
  transition: 0.2s ease-in-out;

  &.normal {
    background-color: ${({ color }) => getColor({ color })};
    color: ${({ color }) => getContrastColor({ color })};

    &:hover {
      filter: brightness(0.8);
      transition: 0.5s;
    }
  }

  &.outlined {
    padding: 0px 15px 0 9px;
    height: ${(props) => (props?.size === 'sm' ? '22px' : props?.size === 'md' ? '34px' : '42px')};
    border: 1px solid ${({ color }) => getColor({ color })};
    background-color: transparent;
    color: ${({ color }) => getColor({ color })};

    &:hover {
      background-color: ${({ color, theme }) => (color ? getColor({ color }) : theme?.coresExtras?.preto)};
      color: ${({ color }) => getContrastColor({ color })};
      transition: 0.5s;
    }
  }

  &.dashed {
    border: 1px dashed ${({ color }) => getColor({ color })};
    color: ${({ color }) => getColor({ color })};
    background-color: transparent;

    &:hover {
      background-color: ${({ color, theme }) => (color ? getColor({ color }) : theme?.coresExtras?.preto)};
      color: ${({ color }) => getContrastColor({ color })};
      transition: 0.5s;
    }
  }

  &.naked {
    color: ${({ color }) => getColor({ color })};
    background-color: transparent;
  }

  &:hover {
    background-color: ${({ color, theme }) => (color ? getColor({ color }) : theme?.coresExtras?.preto)};
    color: ${({ color }) => getContrastColor({ color })};
    transition: 0.5s;
  }
`;
