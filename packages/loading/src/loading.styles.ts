import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircularLoading = styled.div`
  &.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  &.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    margin: 8px;
    border: 5px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.cores.primaria} transparent transparent transparent;
  }
  &.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  &.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  &.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
