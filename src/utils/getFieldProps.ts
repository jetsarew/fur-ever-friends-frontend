import { FormikErrors, FormikValues } from "formik";
import { get } from "lodash";
import React from "react";

type FormikType<Values> = {
  errors: FormikErrors<Values>;
  initialValues: Values;
  values: FormikValues;
  validateField: (name: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldTouched: (
    name: string,
    value?: boolean,
    shouldValidate?: boolean,
  ) => void;
  setFieldValue: (name: string, value: string, shouldValidate?: boolean) => void;
};

export const getFieldProps = <Values extends object>(
  formik: FormikType<Values>,
  name: keyof Values,
) => {
  const error = get(formik.errors, name);
  const errorMessage = error ?? null;
  const initialValue = get(formik.initialValues, name);
  const value = get(formik.values, name, initialValue) ?? "";

  return {
    name,
    value,
    initialValue,
    validate: () => formik.validateField(name as string),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      formik.handleChange(e);
    },
    onBlur: () => {
      formik.setFieldTouched(name as string, true);
    },
    setValue: (value: string) => {
      formik.setFieldValue(name as string, value);
    },
    error: !!error,
    errorMessage,
  };
};
