import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites, grays },
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
    height: spacing.multipleXL * 3.5,
    paddingLeft: spacing.multipleReg * 3,
    borderColor: grays.gray300,
    borderWidth: 2,
    borderRadius: spacing.multipleReg * 4,
    backgroundColor: whites.white100,
  },
  icon: {
    width: spacing.multipleReg * 3,
    height: spacing.multipleReg * 3,
  },
  optionText: {
    fontFamily: typography.semiBold,
    fontSize: 12,
    marginTop: spacing.multipleS,
  },
});
