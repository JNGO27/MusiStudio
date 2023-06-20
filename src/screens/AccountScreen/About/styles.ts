import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: { whites, purples },
  spacing,
  typography,
} = globalStyles;

export default (
  horizontalScale: DirectionalScale,
  verticalScale: DirectionalScale,
  moderateScale: CalculatedScale,
) => {
  const headlinePosition = verticalScale(spacing.multipleReg * 6.5);

  return StyleSheet.create({
    screenContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: purples.purple100,
      paddingHorizontal: horizontalScale(spacing.multipleXL * 1.5),
    },
    headlineText: {
      position: "absolute",
      top: headlinePosition,
      fontFamily: typography.bold,
      fontSize: moderateScale(20),
      color: whites.white300,
      textAlign: "center",
    },
    allContentContainer: {
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      flex: 1,
      gap: spacing.multipleXL * 5,
      marginTop: headlinePosition + verticalScale(spacing.multipleXL * 3),
    },
    contentContainer: {},
    aboutAppTextContent: {
      textAlign: "left",
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
      color: purples.purple300,
    },
    aboutCreatorHeadline: {
      textAlign: "center",
      fontSize: moderateScale(18),
      fontFamily: typography.semiBold,
      color: whites.white200,
    },
    aboutMeTextContent: {
      textAlign: "left",
      fontSize: moderateScale(12),
      fontFamily: typography.semiBold,
      color: purples.purple300,
    },
  });
};
