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

// import useResponsiveness from "@src/hooks/useResponsiveness";
import { Formik } from "formik";

import type { FormikSubmit } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import createStyleSheet from "./styles";

type MyFormValues = {
  email: string;
};

const ForgotPassword = () => {
  const styles = createStyleSheet();

  const mostRecentURL = Linking.useURL();
  const resetPasswordFormURLScreen = Linking.createURL("/auth/home");
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
    if (mostRecentURL?.includes("/auth/home")) {
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
