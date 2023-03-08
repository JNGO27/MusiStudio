import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList, AuthNavOptions } from "@types";

type AuthNavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  "AuthHome"
>;

type Props = {
  authOption: AuthNavOptions;
};

const AuthOption = ({ authOption }: Props) => {
  const navigator = useNavigation<AuthNavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigator.navigate(authOption)}>
      <Text>{authOption}</Text>
    </TouchableOpacity>
  );
};

export default AuthOption;
