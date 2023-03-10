import { View } from "react-native";

import { AuthOption, OAuthOption } from "@src/components";
import styles from "./styles";

const Auth = () => {
  return (
    <View style={styles.container}>
      <AuthOption authOption="SignIn" />
      <OAuthOption provider="google" />
    </View>
  );
};

export default Auth;
