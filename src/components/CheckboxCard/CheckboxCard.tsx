import React from "react";
import { TouchableOpacity } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  onPress: () => void;
  isChosen: boolean;
  children: React.ReactNode;
};

const CheckboxCard = ({ onPress, isChosen, children }: Props) => {
  const [horizontalScale, verticalScale, moderateScale, dimensionWidth] =
    useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    isChosen,
    dimensionWidth,
  );
  return (
    <TouchableOpacity style={styles.checkboxCard} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CheckboxCard;
