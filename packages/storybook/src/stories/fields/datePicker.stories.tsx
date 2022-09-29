import { DatePicker } from '../../../../fields/src/datePicker/datePicker';
import { Form } from '../../../../fields/src/form';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: DatePicker,
  title: 'Design System/Fields/DatePicker',
};

export const datePicker = () => {
  return (
    <ThemeProvider>
      <Form
        onSubmit={() => {
          //
        }}
      >
        <DatePicker name="valor" />
        <DatePicker name="valor2" disableFuture />
        <DatePicker name="valor3" disablePast />
      </Form>
    </ThemeProvider>
  );
};
