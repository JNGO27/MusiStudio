import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import type { FormikSubmit, AuthStackParamList } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import { useCheckboxContext } from "@src/contexts/CheckboxContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type MyFormValues = {
  password: string;
  passwordConfirmation: string;
};

type NavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  "AuthHome"
>;

const ResetForm = () => {
  const { checked, setChecked } = useCheckboxContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );
  const navigator = useNavigation<NavigationProps>();

  const formValues: MyFormValues = {
    password: "",
    passwordConfirmation: "",
  };

  const resetPassword = async ({ password }: MyFormValues) => {
    const { error } = await supabaseConfig.auth.updateUser({
      password,
    });

    // eslint-disable-next-line no-console
    if (error) console.error(error);

    navigator.navigate("AuthHome");
  };

  return (
    <Formik initialValues={formValues} onSubmit={resetPassword}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
          <View style={styles.container}>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("Password")}
              value={values.password}
              placeholder="Password"
              autoComplete="password"
              secureTextEntry={!checked}
            />
            <TextInput
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("password")}
              value={values.passwordConfirmation}
              placeholder="Confirm Password"
              secureTextEntry={!checked}
            />
            <View>
              <Text>Show Password</Text>
            </View>
            <Checkbox
              style={{ width: 40, height: 40 }}
              value={checked}
              onValueChange={setChecked}
            />
            <View>
              <TouchableOpacity onPress={handleSubmit as FormikSubmit}>
                <Text>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default ResetForm;
