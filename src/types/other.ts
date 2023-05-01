import type { GestureResponderEvent, ViewStyle, TextStyle } from "react-native";

export type FormikSubmit = (
  values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined,
) => void;

export type StyleSheetProps = {
  [key: string]: ViewStyle | TextStyle;
};
