import { Controller } from 'react-hook-form';
import { Autocomplete as AutocompleteMui, createFilterOptions, TextField } from '@mui/material';
import type { ICreatable, IOption } from './creatable.types';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Creatable({ name, control, defaultValue, rules, shouldUnregister, options, ...rest }: ICreatable) {
  const filter = createFilterOptions<IOption>();
  const [value, setValue] = useState<IOption | null>(null);

  return (
    <Controller
      render={() => (
        <AutocompleteMui
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option.title);
            if (inputValue !== '' && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          fullWidth
          options={options}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => <TextField {...params} size="small" {...rest} />}
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
}

export { Creatable };
