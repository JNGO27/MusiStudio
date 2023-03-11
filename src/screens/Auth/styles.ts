import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites },
} = globalStyles;

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.multipleReg * 3,
    width: "100%",
    minHeight: "100%",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.multipleXL,
    width: spacing.multipleReg * 40,
    height: spacing.multipleReg * 50,
    backgroundColor: whites.white100,
    borderRadius: spacing.multipleXL,
  },
});
