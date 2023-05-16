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
    black: "hsl(0, 0%, 0%)",
    blackAlpha5: "hsla(0, 0%, 0%, 0.05)",
    blackAlpha10: "hsla(0, 0%, 0%, 0.1)",
    blackAlpha20: "hsla(0, 0%, 0%, 0.2)",
    blackAlpha30: "hsla(0, 0%, 0%, 0.3)",
    blackAlpha40: "hsla(0, 0%, 0%, 0.4)",
    blackAlpha50: "hsla(0, 0%, 0%, 0.5)",
    blackAlpha60: "hsla(0, 0%, 0%, 0.6)",
    blackAlpha70: "hsla(0, 0%, 0%, 0.7)",
    blackAlpha80: "hsla(0, 0%, 0%, 0.8)",
    blackAlpha90: "hsla(0, 0%, 0%, 0.9)",
    blackTransparent: "hsla(0, 0%, 0%, 0.75)",
  },
  grays: {
    gray300: "hsl(24, 6%, 80%)",
    gray400: "hsl(24, 4%, 40%)",
    gray600: "hsl(24, 4%, 35%)",
    gray700: "hsl(24, 4%, 28%)",
    gray800: "hsl(22, 3.8%, 22.5%)",
  },
  lightPurples: {
    lightPurple100: "hsl(252.5, 94.7%, 85.1%)",
  },
  purples: {
    purple100: "hsl(243 85% 18%)",
    purple100Tw: "hsl(277, 100%, 99%)",
    purple200: "hsl(276, 100%, 98%)",
    purple300: "hsl(274, 96%, 95%)",
    purple400: "hsl(271, 64%, 84%)",
    purple500: "hsl(270, 54%, 66%)",
    purple600: "hsl(269, 48%, 54%)",
    purple700: "hsl(267, 50%, 45%)",
    purple800: "hsl(266, 54%, 38%)",
    purple900: "hsl(265, 62%, 28%)",
  },

  pinks: {
    pink100: "hsl(360, 100%, 87%)",
    pink300: "hsl(360, 85%, 78%)",
  },
  greens: {
    green50: "hsl(164, 83%, 95%)",
    green100: "hsl(165, 82%, 87%)",
    green200: "hsl(165, 77%, 72%)",
    green300: "hsl(165, 72%, 57%)",
    green400: "hsl(165, 80%, 47%)",
    green500: "hsl(165, 97%, 35%)",
    green600: "hsl(165, 100%, 27%)",
    green700: "hsl(165, 100%, 20%)",
    green800: "hsl(165, 100%, 14%)",
    green900: "hsl(165, 100%, 8%)",
  },
  limes: {
    lime50: "hsl(82, 71%, 92%)",
    lime100: "hsl(83, 72%, 81%)",
    lime200: "hsl(83, 73%, 66%)",
    lime300: "hsl(83, 74%, 51%)",
    lime400: "hsl(83, 85%, 39%)",
    lime500: "hsl(83, 98%, 29%)",
    lime600: "hsl(83, 100%, 22%)",
    lime700: "hsl(83, 100%, 16%)",
    lime800: "hsl(83, 100%, 11%)",
    lime900: "hsl(83, 100%, 7%)",
  },
  emeralds: {
    emerald50: "hsl(145, 63%, 92%)",
    emerald100: "hsl(145, 64%, 80%)",
    emerald200: "hsl(145, 71%, 64%)",
    emerald300: "hsl(145, 73%, 51%)",
    emerald400: "hsl(145, 81%, 39%)",
    emerald500: "hsl(145, 87%, 29%)",
    emerald600: "hsl(145, 100%, 22%)",
    emerald700: "hsl(145, 100%, 16%)",
    emerald800: "hsl(145, 100%, 11%)",
    emerald900: "hsl(145, 100%, 7%)",
  },
  teals: {
    teal50: "hsl(169, 73%, 92%)",
    teal100: "hsl(170, 73%, 80%)",
    teal200: "hsl(170, 72%, 64%)",
    teal300: "hsl(170, 73%, 51%)",
    teal400: "hsl(170, 81%, 39%)",
    teal500: "hsl(170, 87%, 29%)",
    teal600: "hsl(170, 100%, 22%)",
    teal700: "hsl(170, 100%, 16%)",
    teal800: "hsl(170, 100%, 11%)",
    teal900: "hsl(170, 100%, 7%)",
  },
  reds: {
    red100: "hsl(360, 92%, 95%)",
    red200: "hsl(360, 85%, 90%)",
    red300: "hsl(360, 79%, 83%)",
    red400: "hsl(360, 70%, 73%)",
    red500: "hsl(360, 67%, 63%)",
    red600: "hsl(360, 64%, 55%)",
    red700: "hsl(360, 71%, 48%)",
    red800: "hsl(360, 78%, 39%)",
    red900: "hsl(360, 85%, 29%)",
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
