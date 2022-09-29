import { memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { IDatePicker } from './dataPicker.types';

import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker';

export const DatePicker = ({
  rules,
  name,
  defaultValue,
  shouldUnregister,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  ...rest
}: IDatePicker) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <DataPicker /> é necessário que ele esteja dentro de um <Form />');
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={useForm.control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
        render={({ field: { value, onChange } }) => (
          <DatePickerMui
            disableFuture={disableFuture ?? false}
            disablePast={disablePast ?? false}
            value={value ?? null}
            maxDate={maxDate ?? undefined}
            minDate={minDate ?? undefined}
            inputFormat="DD/MM/YYYY"
            onChange={onChange}
            renderInput={(params) => <TextField size="small" variant="outlined" {...params} {...rest} />}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default memo(DatePicker);
