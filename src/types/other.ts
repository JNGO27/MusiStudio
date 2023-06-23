import type { GestureResponderEvent, ViewStyle, TextStyle } from "react-native";
import type { FormikHelpers } from "formik";

export type FormikSubmit = (
  values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined,
) => void;

export type FormikDeleteAccount = (
  values: { email: string },
  formikHelpers: FormikHelpers<{ email: string }>,
) => void | Promise<unknown>;

export type StyleSheetProps = {
  [key: string]: ViewStyle | TextStyle;
};

export type TimedStatusMessageTypes =
  | "Success"
  | "Error"
  | "Canceled"
  | "Success-Edit"
  | "Canceled-Edit"
  | "Success-Edit-Family"
  | "Canceled-Edit-Family"
  | "Delete-Student"
  | "Delete-Family"
  | "";

export type FunctionType = (...args: unknown[]) => unknown;

export type LinearGradientType = {
  colors: string[];
  locations: number[];
  start: { x: number; y: number };
  end: { x: number; y: number };
};
