import { useForm } from 'react-hook-form';
import { TextField } from '../../../../fields/src/textField/textField';

export default {
  component: TextField,
  title: 'Design System/Fields/TextField',
};

export const textField = () => {
  const { control } = useForm();

  return <TextField name="nome" control={control} />;
};
