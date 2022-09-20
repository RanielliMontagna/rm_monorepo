/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type IOption = {
  inputValue?: string;
  title: string;
};

export type ICreatable = Omit<UseControllerProps, 'control'> &
  TextFieldProps & {
    control: any;

    /**
     * As opções que serão exibidas no autocomplete
     */
    options: IOption[];
  };
