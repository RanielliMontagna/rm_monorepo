import styled from 'styled-components';

import { Menu as SzhsinMenu } from '@szhsin/react-menu';

export const Menu = styled(SzhsinMenu)`
  > ul {
    background-color: ${({ theme }) => theme?.menu?.background};
  }
  > ul > li.szh-menu__divider {
    background-color: ${({ theme }) => theme?.menu?.foreground}20;
  }
  > ul > div.szh-menu__arrow {
    background-color: ${({ theme }) => theme?.menu?.background};
  }
  > ul > li.szh-menu__item {
    height: 30px;
    &:hover {
      background-color: ${({ theme }) => theme?.menu?.foreground}08;
    }
  }
`;

export const MenuItemIcone = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme?.menu?.foreground};
`;

export const MenuItemTitulo = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme?.menu?.foreground};
`;
