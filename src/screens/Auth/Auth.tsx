import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import { AuthOption, OAuthOption, LinkGeneral } from "@src/components";
import useResponsiveness from "@src/hooks/useResponsiveness";
import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";
import People from "./people.png";
import AccountPerson from "./AccountPerson";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const Auth = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <LinearGradient
      style={styles.container}
      colors={purpleGradient.colors}
      locations={purpleGradient.locations}
      start={purpleGradient.start}
      end={purpleGradient.end}
    >
      <View style={styles.headlineContainer}>
        <Text style={styles.headlineText}>Welcome to ProtegeCoreSuite</Text>
        <Text style={styles.headlineSubText}>
          {" "}
          Create an account to get started.
        </Text>
      </View>
      <Image source={People} contentFit="contain" style={styles.image} />
      <View style={styles.card}>
        <View style={styles.decorationsContainer}>
          <View style={styles.decorationsContainerInner}>
            <View style={styles.decorationCircle} />
            <View style={styles.decorationBox} />
            <View style={styles.decorationCircle} />
          </View>
          <AccountPerson style={styles.accountPerson} />
        </View>
        <OAuthOption provider="google" />
        <AuthOption authOption="SignUp" />
        <View style={styles.logInContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <LinkGeneral link="SignIn" linkText="Log in" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Auth;
