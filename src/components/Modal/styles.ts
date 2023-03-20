import { StyleSheet } from "react-native";

// import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { blacks, whites, purples, lightPurples },
  typography,
} = globalStyles;

export default (
  // horizontalScale: DirectionalScale,
  // verticalScale: DirectionalScale,
  // moderateScale: CalculatedScale,
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
      backgroundColor: purples.purple100,
      borderRadius: spacing.multipleReg * 4,
      padding: spacing.multipleReg * 2,
      height: "30%",
      width: "75%",
    },
    innerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      gap: spacing.multipleReg * 2,
    },
    text: {
      textAlign: "center",
      color: whites.white100,
      fontFamily: typography.medium,
      fontSize: 12,
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "65%",
      height: spacing.multipleReg * 4.5,
      borderRadius: spacing.multipleReg * 4.5,
      backgroundColor: lightPurples.lightPurple100,
      opacity: 0.75,
    },
    buttonText: {
      position: "relative",
      top: spacing.multipleXS,
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
  });
};
