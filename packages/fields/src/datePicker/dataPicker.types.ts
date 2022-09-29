import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type IDatePicker = Omit<UseControllerProps, 'control'> &
  Pick<
    TextFieldProps,
    'label' | 'error' | 'helperText' | 'size' | 'fullWidth' | 'variant' | 'autoFocus' | 'placeholder'
  > & {
    disableFuture?: boolean;
    disablePast?: boolean;
    maxDate?: string;
    minDate?: string;
  };
