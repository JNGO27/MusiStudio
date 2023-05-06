/* eslint-disable import/order */
import { useReducer } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";

import type { ImageStyle } from "expo-image";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import { CheckboxCard } from "@src/components";
import { FamilyDetails, ExistingFamilyChoice } from ".";

import { SuccessIcon } from "@src/assets/icons";
import changingStyles from "./dynamicStyles";

import { familyTypeInitialState, familyTypeReducer } from "../reducerHelper";

const StudentFamilyChoice = () => {
  const { styles } = useAddStudentFormContext();

  const [familyTypeState, familyTypeDispatch] = useReducer(
    familyTypeReducer,
    familyTypeInitialState,
  );
  const [, , moderateScale] = useResponsiveness();
  const dynamicStyles = changingStyles(moderateScale, familyTypeState);

  const handleNewFamily = () => {
    familyTypeDispatch({ type: "NEW_FAMILY" });
  };

  const handleExistingFamily = () => {
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
      {!familyTypeState.EXISTS ? <FamilyDetails /> : <ExistingFamilyChoice />}
    </>
  );
};

export default StudentFamilyChoice;
