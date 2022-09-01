import styled, { css } from 'styled-components';
import { getColor } from '../../utils/src';

import type { TypographyProps } from './typography.types';

const getSize = ({ size }: Pick<TypographyProps, 'size'>) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: ${({ theme }) => theme?.fontes?.xs};
      `;
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme?.fontes?.sm};
      `;
    case 'md':
      return css`
        font-size: ${({ theme }) => theme?.fontes?.md};
      `;
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme?.fontes?.lg};
      `;
    case 'xl':
      return css`
        font-size: ${({ theme }) => theme?.fontes?.xl};
      `;
    default:
      return css`
        font-size: ${({ theme }) => theme?.fontes?.md};
      `;
  }
};

const getWeight = ({ weight }: Pick<TypographyProps, 'weight'>) => {
  switch (weight) {
    case 'slim':
      return css`
        font-weight: 300;
      `;
    case 'normal':
      return css`
        font-weight: normal;
      `;
    case 'bold':
      return css`
        font-weight: 700;
      `;
  }
};

export const TypographySpan = styled.span<TypographyProps>`
  ${({ weight }) => getWeight({ weight })};
  ${({ size }) => getSize({ size })};
  color: ${({ color }) => getColor({ color })};
`;
