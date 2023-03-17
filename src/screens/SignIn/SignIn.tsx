import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";

import type { FormikSubmit } from "@src/types";
import { LinkGeneral } from "@src/components";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type MyFormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );
  const formValues: MyFormValues = { email: "", password: "" };

  const signInWithEmail = async ({ email, password }: MyFormValues) => {
    const { error } = await supabaseConfig.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
  };

  return (
    <Formik initialValues={formValues} onSubmit={signInWithEmail}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
          <View style={styles.container}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email Address"
            />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
              autoComplete="password"
              secureTextEntry={!checked}
            />
            <View>
              <Text>Show Password</Text>
              <Checkbox value={checked} onValueChange={setChecked} />
            </View>
            <View>
              <TouchableOpacity onPress={handleSubmit as FormikSubmit}>
                <Text>Sign In</Text>
              </TouchableOpacity>
            </View>
            <LinkGeneral
              link="ForgotPassword"
              linkText="Forgot your password?"
            />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default SignIn;
