import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Formik } from "formik";

import { supabaseConfig } from "../../lib/supabaseConfig";

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
        <SafeAreaView className="w-full h-full flex justify-center items-center">
          <View className="w-80 h-2/4 bg-slate-100 flex justify-center gap-4 py-4 px-12 shadow-md shadow-black">
            <TextInput
              className="flex bg-slate-300"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email Address"
            />
            <TextInput
              className="flex bg-slate-300"
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
