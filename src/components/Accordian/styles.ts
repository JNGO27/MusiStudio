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
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#ddd",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    content: {
      marginTop: 10,
      overflow: "hidden",
    },
  });
};
