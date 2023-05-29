import { StyleSheet } from "react-native";

import type { CalculatedScale, FamilyTypeCheckboxesState } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  typography,
  colors: { blacks, greens },
} = globalStyles;

export default (
  moderateScale: CalculatedScale,
  familyTypeState: FamilyTypeCheckboxesState,
) => {
  return StyleSheet.create({
    checkboxCardTextNewFamily: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: familyTypeState.NEW_FAMILY ? greens.green800 : blacks.blackAlpha50,
      textAlign: "center",
    },
    checkboxCardTextExistingFamily: {
      fontFamily: typography.semiBold,
      fontSize: moderateScale(14),
      color: familyTypeState.EXISTS ? greens.green800 : blacks.blackAlpha50,
      textAlign: "center",
    },
  });
};
