import { SelectProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type ISelect = Omit<UseControllerProps, 'control'> &
  SelectProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
    options: { label: string; value: string | number | readonly string[] | undefined }[];
  };
