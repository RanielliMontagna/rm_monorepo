import type { IDataTable } from './dataTable.types';
import { TableRowStyled } from './dataTable.styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Acoes from './acoes/acoes';

const DataTable = ({ colunas, data }: IDataTable) => {
  return (
    <TableContainer sx={{ flex: 1, marginBottom: '16px' }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {colunas?.map((colunas) => (
              <TableCell
                key={colunas.id}
                align={colunas.align}
                style={{ width: colunas.id === 'acoes' ? '40px' : undefined }}
              >
                <b>{colunas.label}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((it) => {
            return (
              <TableRowStyled key={it.id}>
                {colunas?.map((colunas) => {
                  if (colunas.id === 'acoes') {
                    return (
                      <TableCell key={colunas.id} align={colunas.align}>
                        <Acoes acoes={it.acoes} />
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell key={colunas.id} align={colunas.align}>
                        {it[colunas.id]}
                      </TableCell>
                    );
                  }
                })}
              </TableRowStyled>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
