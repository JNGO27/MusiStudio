import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

import { supabaseConfig } from "@lib/supabaseConfig";

type MyFormValues = {
  email: string;
  password: string;
};

const SignUp = () => {
  const formValues: MyFormValues = { email: "", password: "" };

  const signUpWithEmail = async ({ email, password }: MyFormValues) => {
    const { error } = await supabaseConfig.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
  };

  return (
    <Formik initialValues={formValues} onSubmit={signUpWithEmail}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
          <View>
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
            />
            <TouchableOpacity onPress={handleSubmit} title="Submit">
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default SignUp;
