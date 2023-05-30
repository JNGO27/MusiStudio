/* eslint-disable import/order */
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import type { ImageStyle } from "expo-image";

import { useEditStudentFormContext } from "@src/contexts/EditStudentFormContext";
import { useNewModalState } from "@src/hooks";
import { ModalScrollable } from "@src/components";
import ExistingFamilyOptions from "./ExistingFamilyOptions";

import { SuccessIcon } from "@src/assets/icons";
import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const ExistingFamilyChoice = () => {
  const { styles, chosenExistingFamily } = useEditStudentFormContext();
  const [modalVisiable, openOrCloseModal] = useNewModalState();

  const hasChosenFamily = chosenExistingFamily.length >= 1;

  return (
    <View
      style={
        hasChosenFamily
          ? styles.existingFamilyContainerWithChosen
          : styles.existingFamilyContainer
      }
    >
      {hasChosenFamily && (
        <View style={styles.existingFamilyCheckboxCard}>
          <Image
            style={styles.checkIconChosenFamily as ImageStyle}
            source={SuccessIcon}
            contentFit="contain"
          />
          <Text style={styles.existingFamilyParentOne}>
            {chosenExistingFamily}
          </Text>
        </View>
      )}
      <LinearGradient
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        style={styles.chooseFamilyButton}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <TouchableOpacity
          style={styles.chooseFamilyButtonTouchable}
          onPress={openOrCloseModal}
        >
          <Text style={styles.chooseFamilyButtonText}>
            {hasChosenFamily ? "Change Family" : "Choose Family"}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <ModalScrollable
        modalVisible={modalVisiable}
        openOrCloseModal={openOrCloseModal}
      >
        <ExistingFamilyOptions openOrCloseModal={openOrCloseModal} />
      </ModalScrollable>
    </View>
  );
};

export default ExistingFamilyChoice;
