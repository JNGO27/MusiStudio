import { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";
import { Formik } from "formik";

// import useResponsiveness from "@src/hooks/useResponsiveness";
import { getTokens } from "@src/utils/linkHelpers";
import type { FormikSubmit } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import createStyleSheet from "./styles";

type MyFormValues = {
  email: string;
};

const ForgotPassword = () => {
  const styles = createStyleSheet();

  const mostRecentURL = Linking.useURL();
  const desiredScreenUrl = "/auth/reset-form";
  const resetPasswordFormURLScreen = Linking.createURL(desiredScreenUrl);
  const redirectUri = makeRedirectUri({
    path: resetPasswordFormURLScreen,
  });

  const formValues: MyFormValues = { email: "" };

  const handlePasswordReset = async ({ email }: MyFormValues) => {
    const { data, error } = await supabaseConfig.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: redirectUri,
      },
    );

    if (error) return error;

    return data;
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

    if (mostRecentURL?.includes(desiredScreenUrl)) {
      Linking.openURL(resetPasswordFormURLScreen);
    }
  }, [mostRecentURL, resetPasswordFormURLScreen]);

  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values) => handlePasswordReset(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView style={styles.container}>
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email Address"
            />
            <View>
              <TouchableOpacity onPress={handleSubmit as FormikSubmit}>
                <Text>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default ForgotPassword;
