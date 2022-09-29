import { Form } from '../../../../fields/src/form';
import { TextField } from '../../../../fields/src/textField/textField';

export default {
  component: TextField,
  title: 'Design System/Fields/TextField',
};

export const textField = () => {
  return (
    <Form
      onSubmit={() => {
        //
      }}
    >
      <TextField name="nome" />
    </Form>
  );
};
