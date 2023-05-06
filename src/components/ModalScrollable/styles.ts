import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { blacks },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  modalVisible: boolean,
) => {
  return StyleSheet.create({
    container: modalVisible
      ? {
          display: "flex",
          flex: 1,
        }
      : {},
    modalTouchableBackground: {
      display: "flex",
      flex: 1,
    },
    modalContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: blacks.blackTransparent,
    },
    scrollableModalContainer: {
      display: "flex",
      width: "100%",
      minHeight: "80%",
      borderRadius: spacing.multipleReg * 4.5,
      marginTop: "20%",
      paddingBottom: spacing.multipleXL * 40,
    },
    scrollableModalContainerContentContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
