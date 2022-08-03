import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type ITextField = Omit<UseControllerProps, 'control'> &
  Pick<
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
  > & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
  };
