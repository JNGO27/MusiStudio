import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const { spacing } = globalStyles;

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.multiple * 12,
    width: "100%",
    minHeight: "100%",
  },
});
