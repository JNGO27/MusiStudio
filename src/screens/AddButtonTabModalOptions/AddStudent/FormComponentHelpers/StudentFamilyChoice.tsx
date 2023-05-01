import { View, Text } from "react-native";
import { Image } from "expo-image";

import type { ImageStyle } from "expo-image";
import { Dispatch } from "react";

import type {
  FamilyTypeCheckboxesState,
  FamilyTypeCheckboxesActions,
  StyleSheetProps,
} from "@src/types";

import { CheckboxCard } from "@src/components";

import { SuccessIcon } from "@src/assets/icons";

type Props = {
  familyTypeState: FamilyTypeCheckboxesState;
  familyTypeDispatch: Dispatch<FamilyTypeCheckboxesActions>;
  styles: StyleSheetProps;
};

const StudentFamilyChoice = ({
  familyTypeState,
  familyTypeDispatch,
  styles,
}: Props) => {
  const handleNewFamily = () => {
    familyTypeDispatch({ type: "NEW_FAMILY" });
  };

  const handleExistingFamily = () => {
    familyTypeDispatch({ type: "EXISTS" });
  };

  return (
    <View style={styles.formSection}>
      <Text style={styles.formSectionHeaderText}>Student&apos;s Family</Text>
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
            <Text style={styles.checkboxCardTextExistingFamily}>
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
  );
};

export default StudentFamilyChoice;
