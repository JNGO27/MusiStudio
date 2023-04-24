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
      width: "100%",
      height: "100%",
    },
    innerContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    input: {
      width: "50%",
      height: 40,
      borderWidth: 2,
      borderColor: "black",
    },
    button: {
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20%",
      height: 40,
      backgroundColor: "blue",
    },
    text: {
      color: "white",
    },
  });
};
