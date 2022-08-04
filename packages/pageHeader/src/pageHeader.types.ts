import { ButtonProps } from '../../button/src';

export interface PageHeaderProps {
  titulo: string;
  button?: ButtonProps;
  // Elemento que será renderizado alinhado à direita do pageHeader
  right?: React.ReactNode;
  style?: React.CSSProperties;
}
