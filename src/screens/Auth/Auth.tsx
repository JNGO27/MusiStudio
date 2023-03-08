import { View } from "react-native";

import { AuthOption, OAuthOption } from "@src/components";
import { AuthOptionsOnlyArr } from "@src/utils/constants";
import styles from "./styles";

const Auth = () => {
  return (
    <View style={styles.container}>
      {AuthOptionsOnlyArr.slice(1).map((option) => (
        <AuthOption key={option} authOption={option} />
      ))}
      <OAuthOption provider="google" />
    </View>
  );
};

export default Auth;
