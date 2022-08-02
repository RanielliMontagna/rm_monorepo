export type IVariantButton = 'normal' | 'outlined' | 'dashed' | 'naked';

export interface ButtonProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: true;
  variant?: IVariantButton;
  startIcon?: JSX.Element;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  hide?: boolean;
}
