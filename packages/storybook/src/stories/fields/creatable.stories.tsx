import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Creatable } from '../../../../fields/src/creatable/creatable';

export default {
  component: Creatable,
  title: 'Design System/Fields/Creatable',
};

export const creatable = () => {
  const { control } = useForm();

  return (
    <Grid container gap={4}>
      <Grid item width={300}>
        <Creatable
          name="nome"
          fullWidth
          control={control}
          options={[
            {
              title: 'teste',
              inputValue: 'teste',
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
