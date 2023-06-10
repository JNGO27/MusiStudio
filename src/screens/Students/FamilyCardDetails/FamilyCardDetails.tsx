import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@src/redux";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { CardsNavParamList } from "@src/types";

import { useDeleteFamilyDataMutation } from "@src/redux/services/supabaseAPI";
import { getGlobalFamilyData } from "@src/redux/selectors";
import {
  setTimedStatusMessageOccured,
  setTimedStatusMessageType,
} from "@src/redux/features/generalGlobalData";

import { useResponsiveness, useNewModalState } from "@src/hooks";
import { WarningModal, BackButtonCustom } from "@src/components";

import { EditIcon, DeleteIcon } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

type NavigationProps = NativeStackNavigationProp<
  CardsNavParamList,
  "FamilyCardDetails"
>;

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const FamilyCardDetails = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation<NavigationProps>();
  const [deleteFamily] = useDeleteFamilyDataMutation();
  const [modalVisible, openOrCloseModal] = useNewModalState();

  const familyData = useAppSelector(getGlobalFamilyData);

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleEditNavigation = () => navigator.navigate("EditFamily");

  const handleDeleteFamily = () => {
    openOrCloseModal();
    navigator.navigate("StudentsHome");
    dispatch(setTimedStatusMessageType("Delete-Family"));
    dispatch(setTimedStatusMessageOccured(true));
    deleteFamily(familyData?.id as number);
  };

  return (
    <View style={styles.detailsContainer}>
      <BackButtonCustom />
      <LinearGradient
        style={styles.gradientDecoration}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <Text style={styles.headlineText}>Additional Family Details</Text>
      </LinearGradient>
      <View style={styles.detailsContent}>
        <View style={styles.familyDetailContainer}>
          <Text style={styles.familyDetailHeadline}>First Name:</Text>
          <Text style={styles.familyDetailSubline}>
            {familyData?.parent_guardian_first_name_2}
          </Text>
        </View>
        <View style={styles.familyDetailContainer}>
          <Text style={styles.familyDetailHeadline}>Last Name:</Text>
          <Text style={styles.familyDetailSubline}>
            {familyData?.parent_guardian_last_name_2}
          </Text>
        </View>
        <View style={styles.familyDetailContainer}>
          <Text style={styles.familyDetailHeadline}>Phone Number:</Text>
          <Text style={styles.familyDetailSubline}>
            {familyData?.phone_number_2}
          </Text>
        </View>
        <View style={styles.familyDetailContainer}>
          <Text style={styles.familyDetailHeadline}>Email Address:</Text>
          <Text style={styles.familyDetailSubline}>
            {familyData?.email_address_2}
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditNavigation}>
          <EditIcon style={styles.icon} />
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button} onPress={openOrCloseModal}>
          <DeleteIcon style={styles.icon} />
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <WarningModal
        dispatchWarningAction={handleDeleteFamily}
        warningHeaderText="Are you sure?"
        warningBodyText="Deleting this will delete all family data for this selected family AND all student data that has this family associated as they're parent."
        warningActionText="Delete Family"
        modalVisible={modalVisible}
        openOrCloseModal={openOrCloseModal}
      />
    </View>
  );
};

export default FamilyCardDetails;
