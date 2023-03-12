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
  },
  grays: {
    gray300: "hsl(24, 6%, 80%)",
  },
  purples: {
    purple100: "hsl(243 85% 18%)",
  },
  pinks: {
    pink100: "hsl(360, 100%, 87%)",
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

export default {
  spacing: SPACING,
  colors: COLORS,
  typography: TYPOGRAPHY,
};
