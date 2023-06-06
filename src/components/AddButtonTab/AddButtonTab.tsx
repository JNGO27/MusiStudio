import { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useAppSelector } from "@src/redux";
import { getCurrentRoute } from "@src/redux/selectors";

import type { LinearGradientType } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { AddButtonModal } from "@src/components";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { primaryMixedGradient, purpleGradient },
  },
} = globalStyles;

type ButtonScreenGradientChoice = {
  [screen: string]: LinearGradientType;
};

const routeChoices: ButtonScreenGradientChoice = {
  HomeTabScreen: primaryMixedGradient,
  StudentsHome: purpleGradient,
} as const;

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

  const currentRoute = useAppSelector(getCurrentRoute);
  const gradientChoice = routeChoices[currentRoute] || purpleGradient;

  return (
    <LinearGradient
      style={styles.addButton}
      colors={gradientChoice.colors}
      locations={gradientChoice.locations}
      start={gradientChoice.start}
      end={gradientChoice.end}
    >
      <TouchableOpacity onPress={openOrClose} style={styles.addButtonTouchable}>
        <Text style={styles.addButtonIcon}>+</Text>
      </TouchableOpacity>
      <AddButtonModal />
    </LinearGradient>
  );
};

export default memo(AddButtonTab);
