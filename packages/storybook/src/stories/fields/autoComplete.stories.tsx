import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Autocomplete } from '../../../../fields/src/autoComplete/autoComplete';

export default {
  component: Autocomplete,
  title: 'Design System/Fields/Autocomplete',
};

export const autoComplete = () => {
  const { control } = useForm();

  return (
    <Grid container gap={4}>
      <Grid item width={300}>
        <Autocomplete
          name="nome"
          fullWidth
          control={control}
          options={[
            {
              label: 'teste',
              value: 'teste',
            },
            {
              label: 'teste2',
              value: 'teste2',
            },
          ]}
        />
      </Grid>
      <Grid item width={300}>
        <Autocomplete
          name="nome"
          fullWidth
          control={control}
          options={[
            {
              label: 'teste',
              value: 'teste',
            },
            {
              label: 'teste2',
              value: 'teste2',
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
