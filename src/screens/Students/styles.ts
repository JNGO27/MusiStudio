import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  typography,
  colors: { lightPurples, grays },
  componentStyles: { studentCard },
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
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
      paddingHorizontal: horizontalScale(spacing.multipleReg * 2),
    },
    studentCard: studentCard(horizontalScale, verticalScale).cardContainer,
    studentProfileContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    profileCircle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: spacing.multipleReg * 8,
      height: spacing.multipleReg * 8,
      marginTop: spacing.multipleReg,
      marginLeft: spacing.multipleReg,
      borderRadius: spacing.multipleReg * 4,
      borderColor: grays.gray300,
      borderWidth: spacing.multipleXS,
    },
    initials: {
      position: "relative",
      top: verticalScale(spacing.multipleXS),
      fontFamily: typography.bold,
      fontSize: moderateScale(14),
    },
    profileName: {
      position: "relative",
      top: verticalScale(spacing.multipleM),
      display: "flex",
      flex: 1,
      paddingLeft: horizontalScale(spacing.multipleXL),
      fontFamily: typography.bold,
      fontSize: moderateScale(20),
    },
  });
};
