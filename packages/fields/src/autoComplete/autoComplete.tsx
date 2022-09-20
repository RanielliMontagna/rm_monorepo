import { Controller } from 'react-hook-form';
import { Autocomplete as AutocompleteMui, TextField } from '@mui/material';
import type { IAutocomplete } from './autoComplete.types';

const Autocomplete = ({ name, control, defaultValue, rules, shouldUnregister, options, ...rest }: IAutocomplete) => {
  return (
    <Controller
      render={() => (
        <AutocompleteMui size="small" options={options} renderInput={(params) => <TextField {...params} {...rest} />} />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export { Autocomplete };
