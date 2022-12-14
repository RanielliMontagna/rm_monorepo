import styled, { css } from 'styled-components';

import type { ISizeButton } from './button.types';

import { getColor } from './../../utils/src/styles/getColor';
import { getContrastColor } from './../../utils/src/styles/getContrastColor';

export const disabledStyle = (color?: string) => css`
  cursor: auto;
  opacity: 0.5;

  &:disabled {
    &:hover {
      color: ${typeof color === 'string' && getColor({ color })};

      &.outlined {
        background-color: ${({ theme }) => theme?.cores?.terciaria};
      }
      &.dashed {
        background-color: transparent;
      }
      &.naked {
        background-color: transparent;
      }
      &.normal {
        background-color: ${typeof color === 'string' && getColor({ color })};
        color: ${typeof color === 'string' && getContrastColor({ color })};
        filter: none;
      }
    }
  }
`;

export const Button = styled.button<{ size: ISizeButton; fullWidth: boolean; color?: string }>`
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
    background-color: ${({ theme }) => theme?.cores?.terciaria};
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

  ${({ disabled, color }) => disabled && disabledStyle(color)}
`;
