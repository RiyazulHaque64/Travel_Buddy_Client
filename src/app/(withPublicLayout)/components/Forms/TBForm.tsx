"use client";

import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

const TBForm = ({ children, onSubmit, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const submit: SubmitHandler<FieldValues> = (values) => {
    onSubmit(values);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default TBForm;
