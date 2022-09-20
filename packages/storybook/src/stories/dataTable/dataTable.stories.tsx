import { DataTable } from '../../../../dataTable/src';
import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: DataTable,
  title: 'Design System/DataTable',
};

export const menu = () => (
  <ThemeProvider>
    <div style={{ height: '500px', overflow: 'auto' }}>
      <DataTable
        data={[
          {
            id: 1,
            nome: 'nome 1',
          },
          {
            id: 2,
            nome: 'nome 2',
          },
          {
            id: 3,
            nome: 'nome 3',
          },
          {
            id: 4,
            nome: 'nome 4',
          },
          {
            id: 5,
            nome: 'nome 5',
          },
          {
            id: 6,
            nome: 'nome 6',
          },
          {
            id: 7,
            nome: 'nome 7',
          },
          {
            id: 8,
            nome: 'nome 8',
          },
          {
            id: 9,
            nome: 'nome 9',
          },
          {
            id: 10,
            nome: 'nome 10',
          },
          {
            id: 11,
            nome: 'nome 11',
          },
          {
            id: 12,
            nome: 'nome 12',
          },
        ]}
        colunas={[
          {
            label: 'Nome',
            id: 'nome',
          },
        ]}
      />
    </div>
  </ThemeProvider>
);
