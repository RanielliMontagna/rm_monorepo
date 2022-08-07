import React from 'react';
import { HiCurrencyDollar } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import Drawer from '../../../../drawer/src/drawer';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: Drawer,
  title: 'Design System/Drawer',
};

export const withTheme = () => (
  <ThemeProvider>
    <Drawer>
      <Drawer.Header>Teste</Drawer.Header>
      <Drawer.Content>
        <Drawer.Item icon={<MdHome />} path="/home">
          Home
        </Drawer.Item>
        <Drawer.Item
          icon={<HiCurrencyDollar />}
          path="/financeiro"
          options={[
            {
              name: 'Receitas',
              path: '/financeiro/receitas',
              onClick: () => alert('Receitas'),
            },
            {
              name: 'Despesas',
              path: '/financeiro/despesas',
              onClick: () => alert('Despesas'),
            },
          ]}
        >
          Financeiro
        </Drawer.Item>
      </Drawer.Content>
    </Drawer>
  </ThemeProvider>
);
