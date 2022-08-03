import { TextField as TextFieldMui } from '@mui/material';
import { Controller } from 'react-hook-form';
import { ITextField } from './textField.types';

export const TextField = ({ control, rules, name, defaultValue, shouldUnregister, ...rest }: ITextField) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <TextFieldMui
          size="small"
          variant="outlined"
          autoComplete="off"
          value={value ?? ''}
          defaultValue={value}
          onChange={(v) => onChange(v)}
          {...rest}
        />
      )}
    />
  );
};
