import { Controller, useFormContext } from 'react-hook-form';
import NumberFormat from 'react-number-format';

import { TextField } from '@mui/material';
import { ICurrencyField } from './currencyField.types';

export const CurrencyField = ({ textFieldProps, ...rest }: ICurrencyField) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <CurrencyField /> é necessário que ele esteja dentro de um <Form />');
  }

  return (
    <Controller
      {...rest}
      render={({ field }) => (
        <NumberFormat
          customInput={TextField}
          onValueChange={(v) => field.onChange(v.floatValue)}
          value={field.value}
          thousandsGroupStyle="thousand"
          thousandSeparator="."
          decimalSeparator=","
          allowNegative={false}
          prefix={'R$ '}
          inputProps={{
            maxLength: 12,
            onFocus: (e: React.FocusEvent<HTMLInputElement>) => e.target.select(),
          }}
          autoComplete="off"
          {...textFieldProps}
        />
      )}
    />
  );
};

export default CurrencyField;
