import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NavigationProp } from "@react-navigation/native";

import type { AllNavParamLists, AllNavOptions } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { BackIcon } from "@src/assets/icons";

import createStyleSheet from "./styles";

type BackOptions = NavigationProp<AllNavParamLists>;

const BackButtonCustom = () => {
  const navigator = useNavigation<BackOptions>();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleNavigation = () => {
    navigator.goBack();
  };

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={handleNavigation}>
      <BackIcon style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BackButtonCustom;
