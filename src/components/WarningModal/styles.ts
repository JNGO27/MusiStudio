/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { blacks, whites, purples, lightPurples, reds },
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  modalVisible: boolean,
) => {
  return StyleSheet.create({
    modalContainer: modalVisible
      ? { flex: 1, justifyContent: "center", alignItems: "center" }
      : {},
    modalBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: blacks.blackTransparent,
    },
    modalCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: purples.purple100,
      borderRadius: spacing.multipleReg * 4,
      paddingVertical: verticalScale(spacing.multipleReg * 2),
      paddingHorizontal: horizontalScale(spacing.multipleReg),
      height: "50%",
      width: "95%",
    },
    innerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      gap: verticalScale(spacing.multipleReg),
    },
    optionsContainer: {
      display: "flex",
      flex: 1,
      gap: verticalScale(spacing.multipleReg),
    },
    headerText: {
      color: whites.white100,
      fontFamily: typography.medium,
      fontSize: moderateScale(16),
    },
    bodyText: {
      color: whites.white300,
      fontFamily: typography.medium,
      fontSize: moderateScale(14),
      opacity: 0.75,
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "65%",
      height: spacing.multipleReg * 9,
      gap: spacing.multipleReg * 2,
      marginBottom: spacing.multipleXL,
    },
    buttonWarningAction: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: verticalScale(spacing.multipleReg * 5),
      borderRadius: spacing.multipleReg * 4.5,
      borderWidth: spacing.multipleXS,
      borderColor: reds.red900,
      backgroundColor: reds.red500,
    },
    buttonCancel: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: verticalScale(spacing.multipleReg * 5),
      borderRadius: spacing.multipleReg * 4.5,
      borderWidth: spacing.multipleXS,
      borderColor: lightPurples.lightPurple100,
      opacity: 0.75,
    },
    buttonText: {
      position: "relative",
      top: spacing.multipleXS,
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    icon: {
      alignSelf: "center",
      width: moderateScale(spacing.multipleReg * 4, 0.75),
      height: moderateScale(spacing.multipleReg * 4, 0.75),
    },
  });
};
