import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList, AuthNavOptions } from "@src/types";
import EmailSVG from "./EmailSVG";
import styles from "./styles";

type AuthNavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  "AuthHome"
>;

type Props = {
  authOption: AuthNavOptions;
};

const AuthOption = ({ authOption }: Props) => {
  const navigator = useNavigation<AuthNavigationProps>();

  const optionInText =
    authOption === "SignIn" || authOption === "SignUp" ? "Email" : authOption;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigator.navigate(authOption)}
    >
      <View style={styles.optionContainer}>
        <EmailSVG style={styles.icon} />
        <Text style={styles.optionText}>Continue With {optionInText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthOption;
