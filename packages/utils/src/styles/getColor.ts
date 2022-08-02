import { css } from 'styled-components';

export const getColor = ({ color }: { color?: string }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme?.cores?.primaria};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme?.cores?.secundaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme?.cores?.terciaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme?.coresUtilitarias?.success};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme?.coresUtilitarias?.warning};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme?.coresUtilitarias?.danger};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme?.coresExtras?.cinzaClaro};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme?.coresExtras?.cinzaEscuro};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme?.coresExtras?.pretoAppBar};
      `;
    default:
      return css``;
  }
};
