import { View } from "react-native";
import { AuthOption, OAuthOption } from "@src/components";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import globalStyles from "@src/globalStyles";
import styles from "./styles";
import People from "./people.png";
import AccountPerson from "./AccountPerson";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const Auth = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={purpleGradient.colors}
      locations={purpleGradient.locations}
      start={purpleGradient.start}
      end={purpleGradient.end}
    >
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
        <AuthOption authOption="SignIn" />
      </View>
    </LinearGradient>
  );
};

export default Auth;
