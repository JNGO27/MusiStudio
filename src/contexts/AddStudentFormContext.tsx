import { createContext, useContext, useMemo, useState } from "react";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type {
  FormikHandlers,
  FormikHelpers,
  FormikErrors,
  FormikTouched,
} from "formik";

import type { StudentFormValues, StyleSheetProps } from "@src/types";

interface FormProps {
  values: StudentFormValues;
  styles: StyleSheetProps;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  setFieldValue: FormikHelpers<StudentFormValues>["setFieldValue"];
  errors: FormikErrors<StudentFormValues>;
  touched: FormikTouched<StudentFormValues>;
}

interface CompleteFormProps extends FormProps {
  chosenExistingFamily: string;
  setChosenExistingFamily: Dispatch<SetStateAction<string>>;
}

interface ContextProps extends FormProps {
  children: ReactNode;
}

const Context = createContext<CompleteFormProps>({} as CompleteFormProps);

export const AddStudentFormContext = ({
  values,
  styles,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  children,
}: ContextProps) => {
  const [chosenExistingFamily, setChosenExistingFamily] = useState("");

  const conextValue = useMemo(
    () => ({
      values,
      styles,
      errors,
      touched,
      handleChange,
      handleBlur,
      setFieldValue,
      chosenExistingFamily,
      setChosenExistingFamily,
    }),
    [
      chosenExistingFamily,
      errors,
      touched,
      handleBlur,
      handleChange,
      setFieldValue,
      styles,
      values,
    ],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useAddStudentFormContext = () => useContext(Context);
