import styled, { css } from 'styled-components';

import type { TypographyProps } from './typography.types';

export const getColor = ({ color }: { color?: string }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme.cores.primaria};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme.cores.secundaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme.cores.terciaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme.coresUtilitarias.success};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme.coresUtilitarias.warning};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme.coresUtilitarias.danger};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme.coresExtras.cinzaClaro};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme.coresExtras.cinzaEscuro};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme.coresExtras.pretoAppBar};
      `;
    default:
      return css``;
  }
};

const getSize = ({ size }: Pick<TypographyProps, 'size'>) => {
  switch (size) {
    case 'xs':
      return css`
        font-size: ${({ theme }) => theme.fontes?.xs};
      `;
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.fontes?.sm};
      `;
    case 'md':
      return css`
        font-size: ${({ theme }) => theme.fontes?.md};
      `;
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.fontes?.lg};
      `;
    case 'xl':
      return css`
        font-size: ${({ theme }) => theme.fontes?.xl};
      `;
    default:
      return css`
        font-size: ${({ theme }) => theme.fontes?.md};
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
