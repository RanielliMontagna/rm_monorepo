import { PropsWithChildren } from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';

interface IFormProps<T>
  extends PropsWithChildren<{
      onSubmit: (data: T) => void;
    }>,
    UseFormProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Form({ children, onSubmit, ...rest }: IFormProps<any>) {
  const methods = useForm(rest);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
