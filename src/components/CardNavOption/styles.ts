import { StyleSheet } from "react-native";

import { DirectionalScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const { spacing } = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
) => {
  return StyleSheet.create({
    moreDetailsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: spacing.multipleXL * 3,
      padding: spacing.multipleReg,
      borderRadius: spacing.multipleReg * 2,
      backgroundColor: "lightgray",
    },
    moreDetailsIcon: {
      position: "relative",
      bottom: spacing.multipleReg,
      alignSelf: "center",
      width: horizontalScale(spacing.multipleReg * 5),
      height: verticalScale(spacing.multipleReg * 5),
      opacity: 0.75,
    },
  });
};
