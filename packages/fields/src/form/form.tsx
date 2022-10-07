import { PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';

interface IFormProps<T>
  extends PropsWithChildren<{
      onSubmit: (data: T) => void;
    }>,
    UseFormProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Form({ children, onSubmit, ...rest }: IFormProps<any>) {
  const methods = useForm(rest);

  useEffect(() => {
    methods.reset(rest.defaultValues);
  }, [rest.defaultValues, methods.reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  );
}

export default Form;
