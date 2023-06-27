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
  isXS: boolean,
) => {
  return StyleSheet.create({
    tabBarStyleSheet: {
      position: "absolute",
      bottom: isNested ? -1000 : 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: spacing.multipleReg * 6,
      borderTopRightRadius: spacing.multipleReg * 6,
      paddingTop: isXS ? spacing.multipleReg : 0,
      height: "7.25%",
      width: "100%",
      gap: isXS ? spacing.multipleM : spacing.multipleXL,
      backgroundColor: whites.white200,
      shadowColor: blacks.blackTransparent,
      shadowOffset: { width: 0, height: -1.5 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 15,
    },
  });
};
