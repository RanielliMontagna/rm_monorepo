import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type ICurrencyField = Omit<UseControllerProps, 'control'> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  textFieldProps?: Pick<
    TextFieldProps,
    | 'label'
    | 'error'
    | 'helperText'
    | 'size'
    | 'fullWidth'
    | 'variant'
    | 'placeholder'
    | 'autoComplete'
    | 'autoFocus'
    | 'InputProps'
    | 'disabled'
  >;
};