/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/naming-convention */
import { ScrollView, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppSelector } from "@src/redux";

import type { RateOptions, EditStudentFormValues } from "@src/types";

import { useEditStudentDataMutation } from "@src/redux/services/supabaseAPI";

import {
  getTimedStatusMessageOccurred,
  getTimedStatusMessageType,
  getGlobalStudentData,
} from "@src/redux/selectors";

import { useResponsiveness, useResetTimedStatusMessage } from "@src/hooks";
import { EditStudentFormContext } from "@src/contexts/EditStudentFormContext";
import { TimedStatusMessage, BackButtonCustom } from "@src/components";
import {
  HeroSection,
  StudentDetails,
  LessonDetails,
  RateDetails,
  Finalization,
  AdditionalStudentDetails,
} from "@src/components/FormComponentHelpersEditStudent";

import createStyleSheet from "./styles";

const EditStudent = () => {
  useResetTimedStatusMessage();

  const timedStatusMessageOccurred = useAppSelector(
    getTimedStatusMessageOccurred,
  );

  const timedStatusMessageType = useAppSelector(getTimedStatusMessageType);

  const selectedStudentData = useAppSelector(getGlobalStudentData);

  const [editStudentData] = useEditStudentDataMutation();

  const [horizontalScale, verticalScale, moderateScale, dimensionHeight] =
    useResponsiveness();

  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionHeight,
  );

  const formValues: EditStudentFormValues = {
    id: selectedStudentData?.id as number,
    first_name: selectedStudentData?.first_name as string,
    last_name: selectedStudentData?.last_name as string,
    phone_number: selectedStudentData?.phone_number as string,
    email: selectedStudentData?.email_address as string,
    instrument: selectedStudentData?.instrument as string,
    skill_level: selectedStudentData?.skill_level as string,
    gender: selectedStudentData?.gender as string,
    age: selectedStudentData?.age as string,
    lesson_length: selectedStudentData?.lesson_length as string,
    rate: selectedStudentData?.rate as string,
    rate_per_time: selectedStudentData?.rate_per_time as RateOptions,
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Student First Name Required"),
    last_name: Yup.string().required("Student Last Name Required"),
    rate: Yup.string().required("Rate Required"),
  });

  const handleStudentSubmit = async (values: EditStudentFormValues) => {
    await editStudentData(values);
  };

  return (
    <ScrollView style={styles.container}>
      <BackButtonCustom />
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
          submitForm,
          values,
          errors,
          touched,
        }) => {
          return (
            <EditStudentFormContext
              values={values}
              styles={styles}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              submitForm={submitForm}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            >
              <View style={styles.formContainer}>
                <StudentDetails />

                <View style={styles.divider} />

                <AdditionalStudentDetails />

                <View style={styles.divider} />

                <LessonDetails />

                <View style={styles.divider} />

                <RateDetails />

                <View style={styles.divider} />

                <Finalization />
              </View>

              {timedStatusMessageOccurred && (
                <TimedStatusMessage type={timedStatusMessageType} />
              )}
            </EditStudentFormContext>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default EditStudent;
