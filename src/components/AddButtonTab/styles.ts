/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    addButton: {
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      backgroundColor: "purple",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    addButtonIcon: { color: "white" },
  });
};
