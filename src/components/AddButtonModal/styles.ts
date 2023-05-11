import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { blacks, whites, purples },
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
      ? {
          minHeight: "100%",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }
      : {},
    modalBackground: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: blacks.blackTransparent,
    },
    modalBackgroundTouchable: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    modalCard: {
      display: "flex",
      position: "absolute",
      bottom: 0,
      backgroundColor: purples.purple100,
      borderRadius: spacing.multipleReg * 4,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      paddingVertical: verticalScale(spacing.multipleReg * 2),
      paddingHorizontal: horizontalScale(spacing.multipleReg),
      height: "80%",
      width: "100%",
    },
    exitButton: {
      position: "relative",
      right: spacing.multipleL,
      alignSelf: "flex-end",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: spacing.multipleReg * 7,
      height: spacing.multipleReg * 7,
      borderRadius: spacing.multipleReg * 5,
      opacity: 0.75,
    },
    exitButtonIcon: {
      fontFamily: typography.light,
      fontSize: moderateScale(16),
      color: whites.white200,
    },
  });
};
