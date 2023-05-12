import { StyleSheet } from "react-native";

import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { lightPurples },
} = globalStyles;

export default () => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: lightPurples.lightPurple100,
      paddingTop: spacing.multipleXL * 7,
      paddingBottom: spacing.multipleXL * 6.5,
    },
    cardsContainer: {
      width: "100%",
      paddingLeft: spacing.multipleL * 1,
    },
    cardsContainerFlex: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      gap: spacing.multipleReg * 2,
    },
  });
};
