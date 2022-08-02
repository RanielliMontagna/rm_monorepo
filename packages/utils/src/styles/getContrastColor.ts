import { css } from 'styled-components';

export const getContrastColor = ({ color }: { color?: string }) => {
  switch (color) {
    case 'primary':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    case 'secondary':
      return css`
        ${({ theme }) => theme.cores?.terciaria};
      `;
    case 'terciary':
      return css`
        ${({ theme }) => theme.cores?.secondaria};
      `;
    case 'success':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    case 'warning':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    case 'danger':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    case 'darkGray':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    case 'lightGray':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    case 'darkBlue':
      return css`
        ${({ theme }) => theme.coresExtras?.branco};
      `;
    default:
      return css`
        ${({ theme }) => theme.coresExtras?.preto};
      `;
  }
};
