import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { makeRedirectUri } from "expo-auth-session";
import { Formik } from "formik";

import { supabaseConfig } from "@src/lib/supabaseConfig";
import { SUPABASE_URL } from "@env";

type MyFormValues = {
  email: string;
};

const EmailOnlyAuth = () => {
  const formValues: MyFormValues = { email: "" };

  const continueWithEmailOnly = async ({ email }: MyFormValues) => {
    const redirectUri = makeRedirectUri({
      path: SUPABASE_URL,
    });

    const { data, error } = await supabaseConfig.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUri,
      },
    });

    if (error) Alert.alert(error.message);
  };

  return (
    <Formik initialValues={formValues} onSubmit={continueWithEmailOnly}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email Address"
            />
            <View>
              <TouchableOpacity onPress={handleSubmit} title="Submit">
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
