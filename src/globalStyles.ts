import { StyleSheet } from "react-native";

import { DirectionalScale, CalculatedScale } from "@src/types";

const SPACING = {
  multipleXS: 2,
  multipleS: 4,
  multipleM: 6,
  multipleReg: 8,
  multipleL: 10,
  multipleXL: 12,
};

const COLORS = {
  whites: {
    white100: "hsl(38, 60%, 95%)",
    white200: "hsl(44, 48%, 95%)",
    white300: "hsl(44, 20%, 90%)",
  },
  blacks: {
    blackTransparent: "hsla(0, 0%, 0%, 0.75)",
  },
  grays: {
    gray300: "hsl(24, 6%, 80%)",
    gray400: "hsl(24, 4%, 40%)",
    gray600: "hsl(24, 4%, 35%)",
  },
  lightPurples: {
    lightPurple100: "hsl(252.5, 94.7%, 85.1%)",
  },
  purples: {
    purple100: "hsl(243 85% 18%)",
  },
  pinks: {
    pink100: "hsl(360, 100%, 87%)",
    pink300: "hsl(360, 85%, 78%)",
  },
  gradients: {
    purpleGradient: {
      colors: [
        "hsl(243 85% 18%)",
        "hsl(243 79% 21%)",
        "hsl(243 74% 25%)",
        "hsl(242 71% 29%)",
        "hsl(242 66% 33%)",
        "hsl(242 59% 37%)",
        "hsl(242 54% 41%)",
        "hsl(242 49% 45%)",
        "hsl(242 47% 47%)",
        "hsl(242 45% 48%)",
        "hsl(242 43% 50%)",
        "hsl(242 43% 51%)",
      ],
      locations: [
        0.01, 0.07, 0.1, 0.22, 0.3, 0.38, 0.47, 0.56, 0.65, 0.75, 0.87, 1,
      ],
      start: { x: 1, y: 1.15 },
      end: { x: 0, y: 0 },
    },
    pinkGradient: {
      colors: [
        "hsl(313 69% 88%)",
        "hsl(312 74% 87%)",
        "hsl(311 78% 85%)",
        "hsl(310 80% 83%)",
        "hsl(309 81% 81%)",
        "hsl(308 81% 79%)",
        "hsl(318 84% 78%)",
        "hsl(325 84% 76%)",
        "hsl(331 83% 74%)",
        "hsl(337 79% 72%)",
        "hsl(342 75% 70%)",
      ],
      locations: [0.0, 0.02, 0.29, 0.36, 0.43, 0.5, 0.57, 0.64, 0.71, 0.8, 1],
      start: { x: -0.2, y: 0.3 },
      end: { x: 2, y: 0 },
    },
  },
};

const TYPOGRAPHY = {
  thin: "Poppins_100Thin",
  thinItalic: "Poppins_100Thin_Italic",
  extraLight: "Poppins_200ExtraLight",
  extraLightItalic: "Poppins_200ExtraLight_Italic",
  light: "Poppins_300Light",
  lightItalic: "Poppins_300Light_Italic",
  regular: "Poppins_400Regular",
  regularItalic: "Poppins_400Regular_Italic",
  medium: "Poppins_500Medium",
  mediumItalic: "Poppins_500Medium_Italic",
  semiBold: "Poppins_600SemiBold",
  semiBoldItalic: "Poppins_600SemiBold_Italic",
  bold: "Poppins_700Bold",
  boldItalic: "Poppins_700Bold_Italic",
  extraBold: "Poppins_800ExtraBold",
  extraBoldItalic: "Poppins_800ExtraBold_Italic",
  black: "Poppins_900Black",
  blackItalic: "Poppins_900Black_Italic",
};

const ComponentStyles = {
  authContainerOption: (
    horizontalScale: DirectionalScale,
    verticalScale: DirectionalScale,
    moderateScale: CalculatedScale,
  ) => {
    return StyleSheet.create({
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      optionContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: verticalScale(SPACING.multipleL),
        width: "90%",
        height: moderateScale(SPACING.multipleXL * 3.5),
        maxHeight: SPACING.multipleXL * 4.5,
        paddingLeft: moderateScale(SPACING.multipleReg * 2.5),
        borderColor: COLORS.grays.gray300,
        borderWidth: 2,
        borderRadius: SPACING.multipleReg * 4,
        backgroundColor: COLORS.whites.white100,
      },
      icon: {
        width: moderateScale(SPACING.multipleReg * 3, 2),
        maxWidth: moderateScale(SPACING.multipleReg * 4.5, 0.1),
        height: moderateScale(SPACING.multipleReg * 3, 2),
        maxHeight: moderateScale(SPACING.multipleReg * 2.75),
      },
      emailIcon: {
        width: moderateScale(SPACING.multipleReg * 3, 2),
        maxWidth: moderateScale(SPACING.multipleReg * 4, 0.25),
        height: moderateScale(SPACING.multipleReg * 3, 2),
        maxHeight: moderateScale(SPACING.multipleReg * 3),
      },
      optionText: {
        fontFamily: TYPOGRAPHY.semiBold,
        fontSize: moderateScale(12, 0.25),
        marginTop: SPACING.multipleS,
      },
    });
  },
  infoCard: (
    horizontalScale: DirectionalScale,
    verticalScale: DirectionalScale,
  ) => {
    return StyleSheet.create({
      cardContainer: {
        width: horizontalScale(SPACING.multipleXL * 26),
        height: verticalScale(SPACING.multipleReg * 20),
        maxWidth: SPACING.multipleXL * 40,
        maxHeight: SPACING.multipleXL * 22,
        borderRadius: SPACING.multipleReg * 2,
        backgroundColor: COLORS.whites.white200,
        marginLeft: SPACING.multipleM * 1,
      },
    });
  },
};

export default {
  spacing: SPACING,
  colors: COLORS,
  typography: TYPOGRAPHY,
  componentStyles: ComponentStyles,
};
