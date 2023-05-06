import { createContext, useContext, useMemo } from "react";

import type { FormikHandlers, FormikHelpers } from "formik";

import type { StudentFormValues, StyleSheetProps } from "@src/types";

interface FormProps {
  values: StudentFormValues;
  styles: StyleSheetProps;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  setFieldValue: FormikHelpers<StudentFormValues>["setFieldValue"];
}

interface ContextProps extends FormProps {
  children: React.ReactNode;
}

const Context = createContext<FormProps>({} as FormProps);

export const AddStudentFormContext = ({
  values,
  styles,
  handleChange,
  handleBlur,
  setFieldValue,
  children,
}: ContextProps) => {
  const conextValue = useMemo(
    () => ({
      values,
      styles,
      handleChange,
      handleBlur,
      setFieldValue,
    }),
    [handleBlur, handleChange, setFieldValue, styles, values],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useAddStudentFormContext = () => useContext(Context);
