import styled from 'styled-components';
import { TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)`
  > div {
    height: 36px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.cores.terciaria};
  }
`;
