import { View } from "react-native";
import { AuthOption, OAuthOption } from "@src/components";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "@src/globalStyles";
import styles from "./styles";

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
      <View style={styles.card}>
        <OAuthOption provider="google" />
        <AuthOption authOption="SignIn" />
      </View>
    </LinearGradient>
  );
};

export default Auth;
