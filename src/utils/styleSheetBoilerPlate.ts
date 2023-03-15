/* eslint-disable */

// This is meant to just be copied and pasted in other parts of the application.

//component.tsx
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";
const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
const styles = createStyleSheet(horizontalScale, verticalScale, moderateScale);

//styles.ts
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({});
};
