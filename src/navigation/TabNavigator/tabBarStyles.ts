/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { blacks },
} = globalStyles;

const {
  spacing,
  colors: { whites },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  isNested: boolean,
) => {
  return StyleSheet.create({
    tabBarStyleSheet: {
      position: "absolute",
      bottom: isNested ? -100 : 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: spacing.multipleReg * 6,
      borderTopRightRadius: spacing.multipleReg * 6,
      height: "7.25%",
      width: "100%",
      gap: spacing.multipleReg,
      backgroundColor: whites.white200,
      shadowColor: blacks.blackTransparent,
      shadowOffset: { width: 0, height: -1.5 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 15,
    },
  });
};
