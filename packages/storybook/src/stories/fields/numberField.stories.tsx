import { Form } from '../../../../fields/src/form';
import { NumberField } from '../../../../fields/src/numberField/numberField';

export default {
  component: NumberField,
  title: 'Design System/Fields/NumberField',
};

export const numberField = () => {
  return (
    <Form
      onSubmit={() => {
        //
      }}
    >
      <NumberField name="valor" />
    </Form>
  );
};
