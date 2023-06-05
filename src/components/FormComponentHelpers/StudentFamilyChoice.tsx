/* eslint-disable import/order */
import { useReducer } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useFormikContext } from "formik";

import type { ImageStyle } from "expo-image";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import { CheckboxCard } from "@src/components";

import {
  FamilyDetails,
  ExistingFamilyChoice,
  AdditionalFamilyDetails,
} from ".";

import { SuccessIcon } from "@src/assets/icons";
import changingStyles from "./dynamicStyles";

import {
  familyTypeInitialState,
  familyTypeReducer,
} from "@src/screens/AddButtonTabModalOptions/AddStudent/reducerHelper";

const StudentFamilyChoice = () => {
  const { setTouched, setValues } = useFormikContext();

  const { setFieldValue, setChosenExistingFamily, values, styles } =
    useAddStudentFormContext();

  const [familyTypeState, familyTypeDispatch] = useReducer(
    familyTypeReducer,
    familyTypeInitialState,
  );
  const [, , moderateScale] = useResponsiveness();
  const dynamicStyles = changingStyles(moderateScale, familyTypeState);

  const handleNewFamily = () => {
    setFieldValue("existing_family_id", "");
    setChosenExistingFamily("");
    familyTypeDispatch({ type: "NEW_FAMILY" });
  };

  const handleExistingFamily = () => {
    setValues({
      ...values,
      family_first_name: "",
      family_last_name: "",
      family_phone_number: "",
      family_email: "",
    });

    setTouched({
      family_first_name: false,
      family_last_name: false,
    });

    familyTypeDispatch({ type: "EXISTS" });
  };

  return (
    <>
      <View style={styles.formSection}>
        <Text style={styles.formSectionHeaderText}>Student&apos;s Family</Text>
        <View style={styles.familyTypeContainer}>
          <CheckboxCard
            onPress={handleNewFamily}
            isChosen={familyTypeState.NEW_FAMILY}
          >
            <View style={styles.checkboxCardInner}>
              <Text style={dynamicStyles.checkboxCardTextNewFamily}>
                Create New Family
              </Text>
              {familyTypeState.NEW_FAMILY ? (
                <Image
                  style={styles.checkIcon as ImageStyle}
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
              <Text style={dynamicStyles.checkboxCardTextExistingFamily}>
                Choose From Existing Family
              </Text>
              {familyTypeState.EXISTS ? (
                <Image
                  style={styles.checkIcon as ImageStyle}
                  source={SuccessIcon}
                  contentFit="contain"
                />
              ) : null}
            </View>
          </CheckboxCard>
        </View>
      </View>
      {!familyTypeState.EXISTS ? (
        <>
          <FamilyDetails />
          <View style={styles.divider} />
          <AdditionalFamilyDetails />
        </>
      ) : (
        <ExistingFamilyChoice />
      )}
    </>
  );
};

export default StudentFamilyChoice;
