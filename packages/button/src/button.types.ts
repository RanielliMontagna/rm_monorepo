export type IVariantButton = 'normal' | 'outlined' | 'dashed' | 'naked';
export type ISizeButton = 'sm' | 'md' | 'lg';
export interface ButtonProps {
  color?: string;
  size?: ISizeButton;
  fullWidth?: true;
  variant?: IVariantButton;
  startIcon?: JSX.Element;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  hide?: boolean;
  disabled?: boolean;
}
