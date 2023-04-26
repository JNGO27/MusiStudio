import { useState, useReducer } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Formik } from "formik";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useInsertStudentDataMutation } from "@src/redux/services/supabaseAPI";

import type { StudentFormValues, FormikSubmit } from "@src/types";

import createStyleSheet from "./styles";

import { initialState, reducer } from "./reducerHelper";

const AddStudent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [doesFamilyExist, setDoesFamilyExist] = useState(false);
  const [insertStudentData] = useInsertStudentDataMutation();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const formValues: StudentFormValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    family_first_name: "",
    family_last_name: "",
    family_phone_number: "",
    family_email: "",
    lesson_length: "",
    rate: "",
  };

  const handleStudentSubmit = async (values: StudentFormValues) => {
    await insertStudentData(values);
  };

  const handlePerHour = () => {
    dispatch({ type: "PER_HOUR" });
  };

  const handlePerLesson = () => {
    dispatch({ type: "PER_LESSON" });
  };

  const handlePerMonth = () => {
    dispatch({ type: "PER_MONTH" });
  };

  return (
    <ScrollView style={styles.container}>
      <Formik initialValues={formValues} onSubmit={handleStudentSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <View style={styles.innerContainer}>
              <Text>Student</Text>
              <TextInput
                style={styles.input}
                value={values.first_name}
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                placeholder="first_name"
              />
              <TextInput
                style={styles.input}
                value={values.last_name}
                onChangeText={handleChange("last_name")}
                onBlur={handleBlur("last_name")}
                placeholder="last_name"
              />
              <TextInput
                style={styles.input}
                value={values.phone_number}
                onChangeText={handleChange("phone_number")}
                onBlur={handleBlur("phone_number")}
                placeholder="phone_number"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="email"
              />
              <Text>Family</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Text>Family Already Exists?</Text>
                <Checkbox
                  value={doesFamilyExist}
                  onValueChange={setDoesFamilyExist}
                />
              </View>
              {!doesFamilyExist ? (
                <View>
                  <TextInput
                    style={styles.input}
                    value={values.family_first_name}
                    onChangeText={handleChange("family_first_name")}
                    onBlur={handleBlur("family_first_name")}
                    placeholder="family_first_name"
                  />
                  <TextInput
                    style={styles.input}
                    value={values.family_last_name}
                    onChangeText={handleChange("family_last_name")}
                    onBlur={handleBlur("family_last_name")}
                    placeholder="family_last_name"
                  />
                  <TextInput
                    style={styles.input}
                    value={values.family_phone_number}
                    onChangeText={handleChange("family_phone_number")}
                    onBlur={handleBlur("family_phone_number")}
                    placeholder="family_phone_number"
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    value={values.family_email}
                    onChangeText={handleChange("family_email")}
                    onBlur={handleBlur("family_email")}
                    placeholder="family_email"
                  />
                </View>
              ) : (
                <Text>Yes it does</Text>
              )}
              <Text>Lesson Length</Text>

              <TextInput
                style={styles.input}
                value={values.rate}
                onChangeText={handleChange("lesson_length")}
                onBlur={handleBlur("lesson_length")}
                keyboardType="numeric"
                placeholder="lesson_length"
              />
              <Text>Rate</Text>
              <View
                style={{
                  display: "flex",
                  width: "80%",
                  flexDirection: "row",
                  gap: 40,
                }}
              >
                <TextInput
                  style={styles.input}
                  value={values.rate}
                  onChangeText={handleChange("rate")}
                  onBlur={handleBlur("rate")}
                  keyboardType="numeric"
                  placeholder="rate"
                />
                <View style={{ display: "flex", gap: 20 }}>
                  <Checkbox
                    value={state.PER_HOUR}
                    onValueChange={handlePerHour}
                  />
                  <Checkbox
                    value={state.PER_LESSON}
                    onValueChange={handlePerLesson}
                  />
                  <Checkbox
                    value={state.PER_MONTH}
                    onValueChange={handlePerMonth}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit as FormikSubmit}
              >
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AddStudent;
