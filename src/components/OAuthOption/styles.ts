import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const { spacing } = globalStyles;

export default StyleSheet.create({
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
    gap: spacing.multipleL,
    width: "90%",
    height: spacing.multipleXL * 4,
    paddingLeft: spacing.multipleReg * 2,
    borderColor: "hsl(24, 6%, 80%)",
    borderWidth: 2,
    borderRadius: spacing.multipleReg * 4,
  },
  icon: {
    width: spacing.multipleReg * 4,
    height: spacing.multipleReg * 4,
  },
});
