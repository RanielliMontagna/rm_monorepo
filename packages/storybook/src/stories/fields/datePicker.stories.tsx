import { useForm } from 'react-hook-form';
import { DatePicker } from '../../../../fields/src/datePicker/datePicker';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: DatePicker,
  title: 'Design System/Fields/DatePicker',
};

export const datePicker = () => {
  const { control } = useForm();

  return (
    <ThemeProvider>
      <DatePicker name="valor" control={control} />
      <DatePicker name="valor2" control={control} disableFuture />
      <DatePicker name="valor3" control={control} disablePast />
    </ThemeProvider>
  );
};
