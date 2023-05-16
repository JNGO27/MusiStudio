/* eslint-disable import/order */
import { ScrollView, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { useResponsiveness } from "@src/hooks";
import { AddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import {
  useInsertStudentDataMutation,
  useInsertStudentExistingFamilyDataMutation,
} from "@src/redux/services/supabaseAPI";
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

  const [insertStudentExistingFamilyData] =
    useInsertStudentExistingFamilyDataMutation();

  const [horizontalScale, verticalScale, moderateScale, dimensionHeight] =
    useResponsiveness();

  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionHeight,
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
    existing_family_id: "",
    lesson_length: "",
    rate: "",
    rate_per_time: "per_hour",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Student First Name Required"),
    last_name: Yup.string().required("Student Last Name Required"),
    family_first_name: Yup.string().required("Parent First Name Required"),
    family_last_name: Yup.string().required("Parent Last Name Required"),
    rate: Yup.string().required("Rate Required"),
  });

  const handleStudentSubmit = async (values: StudentFormValues) => {
    if (values.existing_family_id.length === 0) {
      await insertStudentData(values);
    } else {
      await insertStudentExistingFamilyData(values);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeroSection styles={styles} />
      <Formik
        initialValues={formValues}
        onSubmit={handleStudentSubmit}
        validationSchema={validationSchema}
        validateOnBlur
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => {
          return (
            <AddStudentFormContext
              values={values}
              styles={styles}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            >
              <View style={styles.formContainer}>
                <StudentDetails />

                <View style={styles.divider} />

                <StudentFamilyChoice />

                <View style={styles.divider} />

                <LessonDetails />

                <View style={styles.divider} />

                <RateDetails />

                <View style={styles.divider} />

                <Finalization handleSubmit={handleSubmit} styles={styles} />
              </View>
            </AddStudentFormContext>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AddStudent;
