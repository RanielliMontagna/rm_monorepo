import { CurrencyField } from '../../../../fields/src/currencyField/currencyField';
import { Form } from '../../../../fields/src/form';

export default {
  component: CurrencyField,
  title: 'Design System/Fields/CurrencyField',
};

export const currencyField = () => {
  return (
    <Form
      onSubmit={() => {
        //
      }}
    >
      <CurrencyField
        name="valor"
        textFieldProps={{
          size: 'small',
        }}
      />
    </Form>
  );
};
