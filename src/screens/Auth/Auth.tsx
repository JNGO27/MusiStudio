import { SafeAreaView } from "react-native";

import { AuthOption, OAuthOption } from "@src/components";
import { AuthOptionsOnlyArr } from "@src/utils/constants";

const Auth = () => {
  return (
    <SafeAreaView>
      {AuthOptionsOnlyArr.slice(1).map((option) => (
        <AuthOption key={option} authOption={option} />
      ))}
      <OAuthOption provider="google" />
    </SafeAreaView>
  );
};

export default Auth;
