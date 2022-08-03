import { useForm } from 'react-hook-form';
import { NumberField } from '../../../../fields/src/numberField/numberField';

export default {
  component: NumberField,
  title: 'Design System/Fields/NumberField',
};

export const numberField = () => {
  const { control } = useForm();

  return <NumberField name="valor" control={control} />;
};
