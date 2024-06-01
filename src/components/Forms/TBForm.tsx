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
  formReset?: boolean;
} & TFormConfig;

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

const TBForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  formReset = true,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const submit: SubmitHandler<FieldValues> = (values) => {
    onSubmit(values);
    if (formReset) {
      reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default TBForm;
