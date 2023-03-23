import { StyleSheet } from "react-native";

import { DirectionalScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { lightPurples },
  componentStyles: { studentCard },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  // moderateScale: CalculatedScale,
) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      minHeight: "100%",
      backgroundColor: lightPurples.lightPurple100,
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
      height: "100%",
      gap: spacing.multipleReg * 2,
    },
    studentCard: studentCard(horizontalScale, verticalScale).cardContainer,
  });
};
