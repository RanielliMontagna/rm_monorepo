import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Select } from '../../../../fields/src/select/select';

export default {
  component: Select,
  title: 'Design System/Fields/Select',
};

export const select = () => {
  const { control } = useForm();

  return (
    <Grid container>
      <Grid item width={300}>
        <Select
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
