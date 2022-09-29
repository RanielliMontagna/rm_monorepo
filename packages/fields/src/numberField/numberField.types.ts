import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type MasksType = 'cpf' | 'cnpj' | 'cpfCnpj' | 'phone';

export type INumberField = Omit<UseControllerProps, 'control'> & {
  mask?: MasksType;
  allowNegative?: boolean;
  onInputChange?: (value: string) => void;
} & Pick<
    TextFieldProps,
    | 'label'
    | 'error'
    | 'helperText'
    | 'size'
    | 'fullWidth'
    | 'variant'
    | 'autoFocus'
    | 'placeholder'
    | 'autoComplete'
    | 'InputProps'
    | 'disabled'
  >;
