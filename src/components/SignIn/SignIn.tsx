import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

import { supabaseConfig } from "../../lib/supabaseConfig";

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
            <View className="flex flex-row gap-5">
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
