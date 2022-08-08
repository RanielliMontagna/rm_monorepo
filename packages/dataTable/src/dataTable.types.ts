export interface IColunas {
  id: string;
  label: string;
  align?: 'right';
}

export interface IAcoes {
  id: string;
  label: string;
  startNode?: React.ReactElement;
  onClick: () => void;
}

export interface IDataTable {
  colunas: IColunas[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] & { acoes?: IAcoes[] };
}
