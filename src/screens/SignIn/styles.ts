/* eslint-disable */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  });
};
