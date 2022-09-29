import { Grid } from '@mui/material';
import Creatable from '../../../../fields/src/creatable/creatable';
import { Form } from '../../../../fields/src/form';
import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: Creatable,
  title: 'Design System/Fields/Creatable',
};

export const creatable = () => {
  return (
    <ThemeProvider>
      <Grid container gap={4}>
        <Grid item width={300}>
          <Form
            onSubmit={() => {
              //
            }}
          >
            <Creatable
              name="nome"
              fullWidth
              options={[
                {
                  value: 'teste',
                  label: 'teste',
                },
              ]}
            />
          </Form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
