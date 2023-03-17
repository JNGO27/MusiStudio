import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";

import type { FormikSubmit } from "@src/types";
// import { supabaseConfig } from "@src/lib/supabaseConfig";
import { useCheckboxContext } from "@src/Contexts/CheckboxContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type MyFormValues = {
  password: string;
  passwordConfirmation: string;
};

const ResetForm = () => {
  const { checked, setChecked } = useCheckboxContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );
  const formValues: MyFormValues = { password: "", passwordConfirmation: "" };

  // const resetPassword = () => {
  //   console.log("password reset");
  // };

  return (
    <Formik initialValues={formValues} onSubmit={() => {}}>
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
