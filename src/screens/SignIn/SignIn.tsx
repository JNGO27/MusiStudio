import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

import { supabaseConfig } from "@src/lib/supabaseConfig";

type MyFormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
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

export default SignIn;
