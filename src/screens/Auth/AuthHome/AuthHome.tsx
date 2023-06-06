import { ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { AuthOption, OAuthOption } from "@src/components";

import { StudentSingingStudentGuitar } from "@src/assets/illustrations";
import { AccountPerson } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const AuthHome = () => {
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headlineContainer}>
          <Text style={styles.headlineText}>Welcome to ProtegeCoreSuite</Text>
          <Text style={styles.headlineSubText}>
            Your all-in-one music studio management solution. Create an account
            to get started.
          </Text>
        </View>
        <Image
          source={StudentSingingStudentGuitar}
          contentFit="cover"
          style={styles.image}
        />
        <View style={styles.card}>
          <View style={styles.decorationsContainer}>
            <View style={styles.decorationsContainerInner}>
              <View style={styles.decorationCircle} />
              <View style={styles.decorationBox} />
              <View style={styles.decorationCircle} />
            </View>
            <AccountPerson style={styles.accountPerson} />
          </View>
          <AuthOption authOption="Email" />
          <OAuthOption provider="google" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By continuing, you agree to ProtegeCoreSuite&apos;s Terms And
            Conditions and Privacy Policy.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default AuthHome;
