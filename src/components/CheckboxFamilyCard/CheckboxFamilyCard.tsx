import React from "react";
import { TouchableOpacity } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  onPress: () => void;
  isChosen: boolean;
  children: React.ReactNode;
};

const CheckboxFamilyCard = ({ onPress, isChosen, children }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    isChosen,
  );
  return (
    <TouchableOpacity style={styles.checkboxFamilyCard} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CheckboxFamilyCard;
