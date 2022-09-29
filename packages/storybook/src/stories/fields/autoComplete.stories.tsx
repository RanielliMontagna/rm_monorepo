import { Grid } from '@mui/material';
import { Autocomplete } from '../../../../fields/src/autoComplete/autoComplete';
import { Form } from '../../../../fields/src/form';

export default {
  component: Autocomplete,
  title: 'Design System/Fields/Autocomplete',
};

export const autoComplete = () => {
  return (
    <Form
      onSubmit={() => {
        //
      }}
    >
      <Grid container gap={4}>
        <Grid item width={300}>
          <Autocomplete
            name="nome"
            fullWidth
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
    </Form>
  );
};
