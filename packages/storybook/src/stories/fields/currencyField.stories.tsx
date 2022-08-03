import { useForm } from 'react-hook-form';
import { CurrencyField } from '../../../../fields';

export default {
  component: CurrencyField,
  title: 'Design System/Fields/CurrencyField',
};

export const currencyField = () => {
  const { control } = useForm();

  return (
    <CurrencyField
      name="valor"
      control={control}
      textFieldProps={{
        size: 'small',
      }}
    />
  );
};
