import { createContext, useContext, useMemo, useState } from "react";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type {
  FormikHandlers,
  FormikHelpers,
  FormikErrors,
  FormikTouched,
} from "formik";

import type { EditFamilyFormValues, StyleSheetProps } from "@src/types";

interface FormProps {
  values: EditFamilyFormValues;
  styles: StyleSheetProps;
  handleChange: FormikHandlers["handleChange"];
  handleSubmit: FormikHandlers["handleSubmit"];
  handleBlur: FormikHandlers["handleBlur"];
  submitForm: FormikHelpers<EditFamilyFormValues>["submitForm"];
  setFieldValue: FormikHelpers<EditFamilyFormValues>["setFieldValue"];
  errors: FormikErrors<EditFamilyFormValues>;
  touched: FormikTouched<EditFamilyFormValues>;
}

interface CompleteFormProps extends FormProps {
  chosenExistingFamily: string;
  setChosenExistingFamily: Dispatch<SetStateAction<string>>;
}

interface ContextProps extends FormProps {
  children: ReactNode;
}

const Context = createContext<CompleteFormProps>({} as CompleteFormProps);

export const EditFamilyFormContext = ({
  values,
  styles,
  errors,
  touched,
  handleChange,
  handleSubmit,
  submitForm,
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
      handleSubmit,
      submitForm,
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
      handleSubmit,
      submitForm,
      handleChange,
      setFieldValue,
      styles,
      values,
    ],
  );

  return <Context.Provider value={conextValue}>{children}</Context.Provider>;
};

export const useEditFamilyFormContext = () => useContext(Context);
