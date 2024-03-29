import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { blacks, whites, grays, purples, lightPurples },
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
      height: "40%",
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
      flexDirection: "row",
      flex: 1,
      gap: verticalScale(spacing.multipleReg),
    },
    text: {
      color: whites.white100,
      fontFamily: typography.medium,
      fontSize: moderateScale(16),
    },
    singleOptionContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    singleOptionHeader: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(20),
      color: blacks.blackAlpha90,
      textAlign: "center",
    },
    button: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "65%",
      height: spacing.multipleReg * 4.5,
      borderRadius: spacing.multipleReg * 4.5,
      borderBottomWidth: spacing.multipleXS,
      borderBottomColor: lightPurples.lightPurple100,
      opacity: 0.75,
    },
    buttonText: {
      position: "relative",
      top: spacing.multipleXS,
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    phoneIcon: {
      position: "relative",
      top: spacing.multipleXL,
      color: grays.gray800,
      width: horizontalScale(spacing.multipleReg * 6),
      height: verticalScale(spacing.multipleReg * 6),
    },
  });
};
