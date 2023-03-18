import { useEffect } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";
import { Formik } from "formik";

import { getTokens } from "@src/utils/linkHelpers";
import { FormikSubmit } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";

type MyFormValues = {
  email: string;
};

const EmailOnlyAuth = () => {
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
    <Formik initialValues={formValues} onSubmit={continueWithEmailOnly}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email Address"
            />
            <View>
              <TouchableOpacity onPress={handleSubmit as FormikSubmit}>
                <Text>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default EmailOnlyAuth;
