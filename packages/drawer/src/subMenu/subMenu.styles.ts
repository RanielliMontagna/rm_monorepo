import styled from 'styled-components';

export const SubMenuContainer = styled.div<{ position: number }>`
  display: flex;
  flex-direction: column;
  width: 200px;

  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme?.cores.primaria};
  color: white;

  margin-left: ${({ position }) => position}px;
  transition: 0.3s ease;
`;

export const SubMenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;

  > div:first-child {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    > h4 {
      font-weight: 800;
      padding: 0;
      margin: 0;
    }
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 40px;
    height: 30px;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const SubMenuItem = styled.div<{ path?: string }>`
  display: flex;
  padding: 8px 16px;
  color: white;

  ${({ onClick }) => onClick && `cursor: pointer;`}
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
