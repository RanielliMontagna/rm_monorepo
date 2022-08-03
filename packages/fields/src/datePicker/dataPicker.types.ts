import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type IDatePicker = Omit<UseControllerProps, 'control'> &
  Pick<
    TextFieldProps,
    'label' | 'error' | 'helperText' | 'size' | 'fullWidth' | 'variant' | 'autoFocus' | 'placeholder'
  > & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
    disableFuture?: boolean;
    maxDate?: string;
    minDate?: string;
  };
