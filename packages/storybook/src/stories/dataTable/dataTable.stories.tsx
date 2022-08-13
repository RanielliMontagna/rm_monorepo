import { DataTable } from '../../../../dataTable/src';
import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: DataTable,
  title: 'Design System/DataTable',
};

export const menu = () => (
  <ThemeProvider>
    <DataTable
      data={[
        {
          id: 1,
          nome: 'nome 1',
        },
      ]}
      colunas={[
        {
          label: 'Nome',
          id: 'nome',
        },
      ]}
    />
  </ThemeProvider>
);
