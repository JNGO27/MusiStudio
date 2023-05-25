/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      width: "100%",
    },
    title: {
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 18,
    },
    content: {
      marginTop: 10,
      overflow: "hidden",
    },
  });
};
