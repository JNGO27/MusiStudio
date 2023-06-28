import { ScrollView, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import { APP_NAME } from "@src/utils/constants";

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

type PrivacyPolicyNavigation = NativeStackNavigationProp<
  {
    AuthHome: undefined;
    PrivacyPolicy: undefined;
    TermsAndConditions: undefined;
  },
  "AuthHome"
>;

const AuthHome = () => {
  const navigator = useNavigation<PrivacyPolicyNavigation>();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleTermsAndConditionsScreen = () => {
    navigator.navigate("TermsAndConditions");
  };

  const handlePrivacyPolicyScreen = () => {
    navigator.navigate("PrivacyPolicy");
  };

  return (
    <>
      <StatusBar />
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
              Your music studio student management solution. Create an account
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
              By continuing, you agree to {APP_NAME}&apos;s{" "}
              <Text
                style={styles.privacyPolicyText}
                onPress={handleTermsAndConditionsScreen}
              >
                Terms And Conditions
              </Text>{" "}
              and{" "}
              <Text
                style={styles.privacyPolicyText}
                onPress={handlePrivacyPolicyScreen}
              >
                Privacy Policy
              </Text>
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default AuthHome;
