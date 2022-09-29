import { Grid } from '@mui/material';
import { Form } from '../../../../fields/src/form';
import { Select } from '../../../../fields/src/select/select';

export default {
  component: Select,
  title: 'Design System/Fields/Select',
};

export const select = () => {
  return (
    <Grid container>
      <Grid item width={300}>
        <Form
          onSubmit={() => {
            //
          }}
        >
          <Select
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
        </Form>
      </Grid>
    </Grid>
  );
};
