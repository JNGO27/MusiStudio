import { useReducer } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useInsertStudentDataMutation } from "@src/redux/services/supabaseAPI";
import { CheckboxCard } from "@src/components";

import type { StudentFormValues, FormikSubmit } from "@src/types";

import { SuccessIcon } from "@src/assets/icons";
import { StudentIllustration } from "@src/assets/illustrations";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

import {
  familyTypeInitialState,
  familyTypeReducer,
  rateInitialState,
  rateReducer,
} from "./reducerHelper";

const {
  colors: {
    purples,
    gradients: { purpleGradient },
  },
} = globalStyles;

const AddStudent = () => {
  const [familyTypeState, familyTypeDispatch] = useReducer(
    familyTypeReducer,
    familyTypeInitialState,
  );
  const [rateState, rateDispatch] = useReducer(rateReducer, rateInitialState);
  const [insertStudentData] = useInsertStudentDataMutation();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    familyTypeState,
    rateState,
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
          const isRateEmpty = values.rate.length === 0;

          const rateToFixed = Number(values.rate).toFixed(2);

          const handleNewFamily = () => {
            familyTypeDispatch({ type: "NEW_FAMILY" });
          };

          const handleExistingFamily = () => {
            familyTypeDispatch({ type: "EXISTS" });
          };

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
                <Text style={styles.formSectionHeaderText}>
                  Student&apos;s Family
                </Text>
                <View style={styles.familyTypeContainer}>
                  <CheckboxCard
                    onPress={handleNewFamily}
                    isChosen={familyTypeState.NEW_FAMILY}
                  >
                    <View style={styles.checkboxCardInner}>
                      <Text style={styles.checkboxCardTextNewFamily}>
                        Create New Family
                      </Text>
                      {familyTypeState.NEW_FAMILY ? (
                        <Image
                          style={styles.checkIcon}
                          source={SuccessIcon}
                          contentFit="contain"
                        />
                      ) : null}
                    </View>
                  </CheckboxCard>
                  <CheckboxCard
                    onPress={handleExistingFamily}
                    isChosen={familyTypeState.EXISTS}
                  >
                    <View style={styles.checkboxCardInner}>
                      <Text style={styles.checkboxCardTextExistingFamily}>
                        Choose From Existing Family
                      </Text>
                      {familyTypeState.EXISTS ? (
                        <Image
                          style={styles.checkIcon}
                          source={SuccessIcon}
                          contentFit="contain"
                        />
                      ) : null}
                    </View>
                  </CheckboxCard>
                </View>
              </View>
              {!familyTypeState.EXISTS ? (
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
              <View style={styles.divider} />
              <View style={styles.formSection}>
                <Text style={styles.formSectionHeaderText}>Lesson Length</Text>
                <TextInput
                  style={styles.input}
                  value={values.lesson_length}
                  onChangeText={handleChange("lesson_length")}
                  onBlur={handleBlur("lesson_length")}
                  keyboardType="numeric"
                  placeholder="Minutes"
                  selectionColor={purples.purple100}
                />
              </View>
              <View style={styles.divider} />
              <View style={styles.formSection}>
                <Text style={styles.formSectionHeaderText}>Rate</Text>
                <TextInput
                  style={styles.input}
                  value={values.rate}
                  onChangeText={handleChange("rate")}
                  onBlur={handleBlur("rate")}
                  keyboardType="numeric"
                  placeholder="$ USD Amount *"
                  selectionColor={purples.purple100}
                />
                <View style={styles.rateOptionsTop2Container}>
                  <CheckboxCard
                    isChosen={rateState.PER_HOUR}
                    onPress={handlePerHour}
                  >
                    <Text style={styles.checkboxCardPerHour}>Per Hour</Text>
                    {rateState.PER_HOUR ? (
                      <View style={styles.perRateContainer}>
                        <Image
                          style={styles.checkIconRate}
                          source={SuccessIcon}
                          contentFit="contain"
                        />
                        <Text
                          style={
                            isRateEmpty
                              ? styles.rateBoxAmountEmpty
                              : styles.rateBoxAmount
                          }
                        >
                          {!isRateEmpty
                            ? `$${rateToFixed}`
                            : "Enter Rate Amount"}
                        </Text>
                        {!isRateEmpty && (
                          <Text style={styles.perRateText}>p/h</Text>
                        )}
                      </View>
                    ) : null}
                  </CheckboxCard>
                  <CheckboxCard
                    isChosen={rateState.PER_LESSON}
                    onPress={handlePerLesson}
                  >
                    <Text style={styles.checkboxCardPerLesson}>Per Lesson</Text>
                    {rateState.PER_LESSON ? (
                      <View style={styles.perRateContainer}>
                        <Image
                          style={styles.checkIconRate}
                          source={SuccessIcon}
                          contentFit="contain"
                        />
                        <Text
                          style={
                            isRateEmpty
                              ? styles.rateBoxAmountEmpty
                              : styles.rateBoxAmount
                          }
                        >
                          {!isRateEmpty
                            ? `$${rateToFixed}`
                            : "Enter Rate Amount"}
                        </Text>
                        {!isRateEmpty && (
                          <Text style={styles.perRateText}>p/l</Text>
                        )}
                      </View>
                    ) : null}
                  </CheckboxCard>
                </View>
                <View style={styles.rateOptionsBottomContainer}>
                  <CheckboxCard
                    isChosen={rateState.PER_MONTH}
                    onPress={handlePerMonth}
                  >
                    <Text style={styles.checkboxCardPerMonth}>Per Month</Text>
                    {rateState.PER_MONTH ? (
                      <View style={styles.perRateContainer}>
                        <Image
                          style={styles.checkIconRate}
                          source={SuccessIcon}
                          contentFit="contain"
                        />
                        <Text
                          style={
                            isRateEmpty
                              ? styles.rateBoxAmountEmpty
                              : styles.rateBoxAmount
                          }
                        >
                          {!isRateEmpty
                            ? `$${rateToFixed}`
                            : "Enter Rate Amount"}
                        </Text>
                        {!isRateEmpty && (
                          <Text style={styles.perRateText}>p/m</Text>
                        )}
                      </View>
                    ) : null}
                  </CheckboxCard>
                </View>
                <View style={styles.divider} />
                <View style={styles.saveButtonContainer}>
                  <LinearGradient
                    style={styles.saveButtonContainer}
                    colors={purpleGradient.colors}
                    locations={purpleGradient.locations}
                    start={purpleGradient.start}
                    end={purpleGradient.end}
                  >
                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={handleSubmit as FormikSubmit}
                    >
                      <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AddStudent;
