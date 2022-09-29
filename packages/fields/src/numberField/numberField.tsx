import { Controller, useFormContext } from 'react-hook-form';
import NumberFormat from 'react-number-format';
[];
import { TextField } from '@mui/material';

import type { INumberField } from './numberField.types';
import { useMasks } from './useMasks';

export const NumberField = ({
  name,
  defaultValue,
  shouldUnregister,
  rules,
  mask,
  onInputChange,
  ...rest
}: INumberField) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <NumberField /> é necessário que ele esteja dentro de um <Form />');
  }

  const { objMask } = useMasks(mask);

  return (
    <Controller
      control={useForm.control}
      name={name}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <NumberFormat
          customInput={TextField}
          onValueChange={(values) => {
            onInputChange && onInputChange(values.value);
            onChange(values.value);
          }}
          value={value}
          allowNegative={false}
          inputProps={{
            onFocus: (e: React.FocusEvent<HTMLInputElement>) => e.target.select(),
          }}
          size="small"
          variant="outlined"
          autoComplete="off"
          {...objMask(value)}
          {...rest}
        />
      )}
    />
  );
};
