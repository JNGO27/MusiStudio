import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useResponsiveness from "@src/hooks/useResponsiveness";

import type { AuthStackParamList, AuthNavOptions } from "@src/types";

import EmailImage from "./EmailImage.png";

import createStyleSheet from "./styles";

type AuthNavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  "AuthHome"
>;

type Props = {
  authOption: AuthNavOptions;
};

const AuthOption = ({ authOption }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );
  const navigator = useNavigation<AuthNavigationProps>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigator.navigate(authOption)}
    >
      <View style={styles.optionContainer}>
        <Image source={EmailImage} contentFit="fill" style={styles.emailIcon} />
        <Text style={styles.optionText}>Continue With {authOption}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthOption;
