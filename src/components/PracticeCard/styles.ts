import { StyleSheet } from "react-native";

import { DirectionalScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  componentStyles: { infoCard },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
) => {
  const practiceCardStyles = infoCard(
    horizontalScale,
    verticalScale,
  ).cardContainer;

  return StyleSheet.create({
    practiceCard: {
      ...practiceCardStyles,
    },
  });
};
