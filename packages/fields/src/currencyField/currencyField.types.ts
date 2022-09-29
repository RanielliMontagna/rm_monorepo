import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type ICurrencyField = Omit<UseControllerProps, 'control'> & {
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
