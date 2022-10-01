import { Button, Grid } from '@mui/material';
import { Form } from '../../../../fields/src/form';
import TextField from '../../../../fields/src/textField/textField';

export default {
  component: TextField,
  title: 'Design System/Fields/TextField',
};

export const textField = () => {
  return (
    <Form
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSubmit={(values: any) => {
        /* eslint-disable no-console */
        console.log(values);
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField name="semMascara" label="Sem máscara" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="cpf" label="CPF" mask="cpf" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="cnpj" label="CNPJ" mask="cnpj" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="cpfCnpj" label="CPF/CNPJ" mask="cpfCnpj" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="cep" label="CEP" mask="cep" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="telefone" label="Telefone" mask="telefone" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="decimal" label="Decimal" mask="decimal" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="numero" label="Numero" mask="numero" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="valor" label="Valor" mask="valor" />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
