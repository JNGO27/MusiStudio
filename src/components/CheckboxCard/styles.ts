import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
  isChosen: boolean,
) => {
  return StyleSheet.create({
    checkboxCard: {
      width: horizontalScale(150),
      height: verticalScale(150),
      borderWidth: 2,
      borderColor: isChosen ? "green" : "black",
    },
  });
};
