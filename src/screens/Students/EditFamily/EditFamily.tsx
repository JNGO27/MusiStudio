/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/naming-convention */
import { ScrollView, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppSelector } from "@src/redux";

import type { EditFamilyFormValues } from "@src/types";

import { useEditFamilyDataMutation } from "@src/redux/services/supabaseAPI";

import {
  getTimedStatusMessageOccurred,
  getTimedStatusMessageType,
  getGlobalFamilyData,
} from "@src/redux/selectors";

import { useResponsiveness, useResetTimedStatusMessage } from "@src/hooks";
import { EditFamilyFormContext } from "@src/contexts/EditFamilyFormContext";
import { TimedStatusMessage, BackButtonCustom } from "@src/components";
import {
  HeroSection,
  FamilyDetails,
  Finalization,
  AdditionalFamilyDetails,
} from "@src/components/FormComponentHelpersEditFamily";

import createStyleSheet from "./styles";

const EditFamily = () => {
  useResetTimedStatusMessage();

  const timedStatusMessageOccurred = useAppSelector(
    getTimedStatusMessageOccurred,
  );

  const timedStatusMessageType = useAppSelector(getTimedStatusMessageType);

  const selectedFamilyData = useAppSelector(getGlobalFamilyData);

  const [editFamilyData] = useEditFamilyDataMutation();

  const [horizontalScale, verticalScale, moderateScale, dimensionHeight] =
    useResponsiveness();

  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionHeight,
  );

  const formValues: EditFamilyFormValues = {
    id: selectedFamilyData?.id as number,
    family_first_name:
      selectedFamilyData?.parent_guardian_first_name_1 as string,
    family_last_name: selectedFamilyData?.parent_guardian_last_name_1 as string,
    family_phone_number: selectedFamilyData?.phone_number as string,
    family_email: selectedFamilyData?.email_address as string,
    family_first_name_2:
      selectedFamilyData?.parent_guardian_first_name_2 as string,
    family_last_name_2:
      selectedFamilyData?.parent_guardian_last_name_2 as string,
    family_phone_number_2: selectedFamilyData?.phone_number_2 as string,
    family_email_2: selectedFamilyData?.email_address_2 as string,
  };

  const validationSchema = Yup.object().shape({
    family_first_name: Yup.string().required("Parent First Name Required"),
    family_last_name: Yup.string().required("Parent Last Name Required"),
  });

  const handleFamilySubmit = async (values: EditFamilyFormValues) => {
    await editFamilyData(values);
  };

  return (
    <ScrollView style={styles.container}>
      <BackButtonCustom />
      <HeroSection styles={styles} />
      <Formik
        initialValues={formValues}
        onSubmit={handleFamilySubmit}
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
            <EditFamilyFormContext
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
                <FamilyDetails />

                <View style={styles.divider} />

                <AdditionalFamilyDetails />

                <View style={styles.divider} />

                <Finalization />
              </View>

              {timedStatusMessageOccurred && (
                <TimedStatusMessage type={timedStatusMessageType} />
              )}
            </EditFamilyFormContext>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default EditFamily;
