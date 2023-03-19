import { useEffect } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";

import { getTokens } from "@src/utils/linkHelpers";
import { FormikSubmit } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import useResponsiveness from "@src/hooks/useResponsiveness";
import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";
import EmailSVGGray from "./EmailSvgGray";
import ArrowSVG from "./ArrowSvg";

const {
  colors: {
    gradients: { purpleGradient },
    purples,
  },
} = globalStyles;

type MyFormValues = {
  email: string;
};

const EmailOnlyAuth = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const mostRecentURL = Linking.useURL();
  const desiredScreenUrl = "/auth/home";
  const resetPasswordFormURLScreen = Linking.createURL(desiredScreenUrl);
  const redirectUri = makeRedirectUri({
    path: resetPasswordFormURLScreen,
  });

  const formValues: MyFormValues = { email: "" };

  const continueWithEmailOnly = async ({ email }: MyFormValues) => {
    const { error } = await supabaseConfig.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUri,
      },
    });

    if (error) Alert.alert(error.message);
  };

  useEffect(() => {
    let accessToken: string;
    let refreshToken: string;
    let haveTokens = false;

    if (mostRecentURL !== null && !haveTokens) {
      [accessToken, refreshToken] = getTokens(mostRecentURL);
      haveTokens = true;

      supabaseConfig.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
  }, [mostRecentURL]);

  return (
    <LinearGradient
      colors={purpleGradient.colors}
      locations={purpleGradient.locations}
      start={purpleGradient.start}
      end={purpleGradient.end}
    >
      <Formik initialValues={formValues} onSubmit={continueWithEmailOnly}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.headlineText}>Sign Up / Log In</Text>
              <Text style={styles.headlineSubText}>
                Enter your email to get your magic link to sign you up or log
                you in. Just click the link we&apos;ll send you. That&apos;s it!
              </Text>
            </View>
            <View style={styles.card}>
              <EmailSVGGray style={styles.emailImage} />
              <TextInput
                style={[styles.emailInput]}
                selectionColor={purples.purple100}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoComplete="email"
                placeholder="Email address"
              />
              <TouchableOpacity
                style={styles.magicLinkButton}
                onPress={handleSubmit as FormikSubmit}
              >
                <Text style={styles.text}>Email Magic Link</Text>
              </TouchableOpacity>
              <ArrowSVG style={styles.arrow} />
            </View>
            <View style={styles.backgroundDecoration} />
          </View>
        )}
      </Formik>
    </LinearGradient>
  );
};

export default EmailOnlyAuth;
