import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import { useAppSelector } from "@src/redux";
import { getUserAvatarUrl } from "@src/redux/selectors";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { MusicNote } from "@src/assets/icons";

import createStyleSheet from "./styles";

type AccountNavigationProps = NativeStackNavigationProp<
  { HeaderNav: { screen: "AccountHome" } },
  "HeaderNav"
>;

const AccountNavOption = () => {
  const navigator = useNavigation<AccountNavigationProps>();
  const userAvatarUrl = useAppSelector(getUserAvatarUrl);

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const onPress = () => {
    navigator.navigate("HeaderNav", {
      screen: "AccountHome",
    });
  };

  return (
    <TouchableOpacity style={styles.accountNavContainer} onPress={onPress}>
      {userAvatarUrl ? (
        <Image source={userAvatarUrl} style={styles.accountIcon} />
      ) : (
        <MusicNote style={styles.accountIcon} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default AccountNavOption;
