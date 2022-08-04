import { ButtonProps } from '../../button/src/button.types';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  titulo: string;
  size?: ModalSize;
  children: React.ReactElement;
  footer?: {
    botaoPrimario?: ButtonProps;
    botaoSecundario?: ButtonProps;
    extra?: React.ReactElement;
  };
}
