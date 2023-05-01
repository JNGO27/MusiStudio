/* eslint-disable import/order */
import { ScrollView, View } from "react-native";
import { Formik } from "formik";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useInsertStudentDataMutation } from "@src/redux/services/supabaseAPI";
import {
  HeroSection,
  StudentDetails,
  StudentFamilyChoice,
  LessonDetails,
  RateDetails,
  Finalization,
} from "./FormComponentHelpers";

import type { StudentFormValues } from "@src/types";

import createStyleSheet from "./styles";

const AddStudent = () => {
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
      <HeroSection styles={styles} />
      <Formik initialValues={formValues} onSubmit={handleStudentSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
        }) => {
          return (
            <View style={styles.formContainer}>
              <StudentDetails
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                styles={styles}
              />
              <View style={styles.divider} />
              <StudentFamilyChoice
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                styles={styles}
              />
              <View style={styles.divider} />
              <LessonDetails
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                styles={styles}
              />
              <View style={styles.divider} />
              <RateDetails
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                styles={styles}
              />
              <View style={styles.divider} />
              <Finalization handleSubmit={handleSubmit} styles={styles} />
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AddStudent;
