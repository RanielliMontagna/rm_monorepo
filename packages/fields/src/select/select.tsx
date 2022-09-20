import { Controller } from 'react-hook-form';
import { MenuItem, Select as SelectMui } from '@mui/material';
import type { ISelect } from './select.types';

const Select = ({ name, control, defaultValue, rules, shouldUnregister, options, ...rest }: ISelect) => {
  return (
    <Controller
      render={() => (
        <SelectMui size="small" {...rest}>
          {options.map((option, key) => (
            <MenuItem key={key} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectMui>
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export { Select };
