import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { grays, whites },
  typography,
} = globalStyles;

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
    borderColor: grays.gray300,
    borderWidth: 2,
    borderRadius: spacing.multipleReg * 4,
    backgroundColor: whites.white100,
  },
  icon: {
    width: spacing.multipleReg * 4,
    height: spacing.multipleReg * 4,
  },
  optionText: {
    fontFamily: typography.semiBold,
    fontSize: 12,
  },
});
