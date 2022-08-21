import styled from 'styled-components';

export const DivAppBar = styled.div`
  width: 100%;
  height: 60px;
  /* TODO: adicionar cor no themeProvider */
  background-color: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.foreground};
  transition: 0.3s ease-in-out;
  box-shadow: 1px 0px 13px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
