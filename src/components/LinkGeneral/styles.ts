import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  colors: { pinks },
} = globalStyles;

export default StyleSheet.create({
  text: {
    color: pinks.pink300,
    textDecorationLine: "underline",
    textDecorationColor: pinks.pink300,
  },
});
