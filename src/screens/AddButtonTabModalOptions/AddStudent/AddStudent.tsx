import { useState, useReducer } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useInsertStudentDataMutation } from "@src/redux/services/supabaseAPI";

import type { StudentFormValues, FormikSubmit } from "@src/types";

import { StudentIllustration } from "@src/assets/illustrations";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

import { rateInitialState, rateReducer } from "./reducerHelper";

const {
  colors: {
    purples,
    gradients: { purpleGradient },
  },
} = globalStyles;

const AddStudent = () => {
  const [rateState, rateDispatch] = useReducer(rateReducer, rateInitialState);
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
    rate_per_time: "per_hour",
  };

  const handleStudentSubmit = async (values: StudentFormValues) => {
    await insertStudentData(values);
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        style={styles.imageContainer}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <Text style={styles.headerText}>Add New Student</Text>
        <Image
          source={StudentIllustration}
          contentFit="contain"
          style={styles.addStudentImage}
        />
      </LinearGradient>
      <Formik initialValues={formValues} onSubmit={handleStudentSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
        }) => {
          const handlePerHour = () => {
            rateDispatch({ type: "PER_HOUR" });
            setFieldValue("rate_per_time", "per_hour");
          };

          const handlePerLesson = () => {
            rateDispatch({ type: "PER_LESSON" });
            setFieldValue("rate_per_time", "per_lesson");
          };

          const handlePerMonth = () => {
            rateDispatch({ type: "PER_MONTH" });
            setFieldValue("rate_per_time", "per_month");
          };

          return (
            <View style={styles.formContainer}>
              <View style={styles.formSection}>
                <Text style={styles.formSectionHeaderText}>
                  Student Details
                </Text>
                <TextInput
                  style={styles.input}
                  value={values.first_name}
                  onChangeText={handleChange("first_name")}
                  onBlur={handleBlur("first_name")}
                  placeholder="First Name *"
                  selectionColor={purples.purple100}
                />
                <TextInput
                  style={styles.input}
                  value={values.last_name}
                  onChangeText={handleChange("last_name")}
                  onBlur={handleBlur("last_name")}
                  placeholder="Last Name *"
                  selectionColor={purples.purple100}
                />
                <TextInput
                  style={styles.input}
                  value={values.phone_number}
                  onChangeText={handleChange("phone_number")}
                  onBlur={handleBlur("phone_number")}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  selectionColor={purples.purple100}
                />
                <TextInput
                  style={styles.input}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Email"
                  selectionColor={purples.purple100}
                />
              </View>
              <View style={styles.divider} />
              <View style={styles.formSection}>
                <Text style={styles.formSectionHeaderText}>Family</Text>
                <View>
                  <Text>New Family</Text>
                  <Checkbox
                    value={doesFamilyExist}
                    onValueChange={setDoesFamilyExist}
                  />
                </View>
                <View>
                  <Text>Family Already Exists?</Text>
                  <Checkbox
                    value={doesFamilyExist}
                    onValueChange={setDoesFamilyExist}
                  />
                </View>
              </View>
              {!doesFamilyExist ? (
                <View style={styles.formSection}>
                  <TextInput
                    style={styles.input}
                    value={values.family_first_name}
                    onChangeText={handleChange("family_first_name")}
                    onBlur={handleBlur("family_first_name")}
                    placeholder="Parent First Name *"
                    selectionColor={purples.purple100}
                  />
                  <TextInput
                    style={styles.input}
                    value={values.family_last_name}
                    onChangeText={handleChange("family_last_name")}
                    onBlur={handleBlur("family_last_name")}
                    placeholder="Parent Last Name *"
                    selectionColor={purples.purple100}
                  />
                  <TextInput
                    style={styles.input}
                    value={values.family_phone_number}
                    onChangeText={handleChange("family_phone_number")}
                    onBlur={handleBlur("family_phone_number")}
                    placeholder="Parent Phone Number"
                    keyboardType="numeric"
                    selectionColor={purples.purple100}
                  />
                  <TextInput
                    style={styles.input}
                    value={values.family_email}
                    onChangeText={handleChange("family_email")}
                    onBlur={handleBlur("family_email")}
                    placeholder="Parent Email"
                    selectionColor={purples.purple100}
                  />
                </View>
              ) : (
                <Text>Yes it does</Text>
              )}
              <View style={styles.formSection}>
                <Text style={styles.formSectionHeaderText}>Lesson Length</Text>
                <TextInput
                  style={styles.input}
                  value={values.rate}
                  onChangeText={handleChange("lesson_length")}
                  onBlur={handleBlur("lesson_length")}
                  keyboardType="numeric"
                  placeholder="Lesson Length"
                  selectionColor={purples.purple100}
                />
              </View>
              <View style={styles.formSection}>
                <Text style={styles.formSectionHeaderText}>Rate</Text>
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
                    placeholder="$ USD Amount *"
                    selectionColor={purples.purple100}
                  />
                  <View style={{ display: "flex", gap: 10 }}>
                    <View>
                      <Text>Per Hour</Text>
                      <Checkbox
                        value={rateState.PER_HOUR}
                        onValueChange={handlePerHour}
                      />
                    </View>
                    <View>
                      <Text>Per Lesson</Text>
                      <Checkbox
                        value={rateState.PER_LESSON}
                        onValueChange={handlePerLesson}
                      />
                    </View>
                    <View>
                      <Text>Per Month</Text>
                      <Checkbox
                        value={rateState.PER_MONTH}
                        onValueChange={handlePerMonth}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit as FormikSubmit}
                >
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AddStudent;
