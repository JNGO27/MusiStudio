import { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { AddButtonModal } from "@src/components";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const AddButtonTab = () => {
  const { setModalVisible } = useAddButtonModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const openOrClose = () => {
    setModalVisible((prevVal) => !prevVal);
  };

  return (
    <LinearGradient
      style={styles.addButton}
      colors={purpleGradient.colors}
      locations={purpleGradient.locations}
      start={purpleGradient.start}
      end={purpleGradient.end}
    >
      <TouchableOpacity onPress={openOrClose} style={styles.addButtonTouchable}>
        <Text style={styles.addButtonIcon}>+</Text>
      </TouchableOpacity>
      <AddButtonModal />
    </LinearGradient>
  );
};

export default memo(AddButtonTab);
