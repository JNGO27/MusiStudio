import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites, purples, pinks },
} = globalStyles;

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
  },
  card: {
    display: "flex",
    gap: spacing.multipleReg * 2,
    width: spacing.multipleReg * 40,
    height: spacing.multipleReg * 50,
    margin: -spacing.multipleReg * 7,
    paddingTop: spacing.multipleL * 2,
    backgroundColor: whites.white200,
    borderRadius: spacing.multipleReg * 4.5,
  },
  image: {
    width: spacing.multipleReg * 42,
    height: spacing.multipleReg * 30,
    marginRight: 11,
    borderRadius: spacing.multipleReg * 4.5,
  },
  decorationsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  decorationsContainerInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.multipleXS,
    marginBottom: spacing.multipleReg,
  },
  decorationCircle: {
    backgroundColor: pinks.pink100,
    width: spacing.multipleXS,
    height: spacing.multipleXS,
    borderRadius: 50,
  },
  decorationBox: {
    backgroundColor: purples.purple100,
    height: spacing.multipleXS,
    width: spacing.multipleReg * 4,
    borderRadius: spacing.multipleReg * 4.5,
  },
  accountPerson: {
    display: "flex",
    justifyContent: "center",
    width: spacing.multipleL * 3,
    height: spacing.multipleL * 3,
    marginBottom: spacing.multipleXL,
  },
});
