/* eslint-disable @typescript-eslint/naming-convention */
import { useReducer } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormikContext } from "formik";
import { useAppDispatch } from "@src/redux";

import {
  setTimedStatusMessageOccured,
  setTimedStatusMessageType,
} from "@src/redux/features/generalGlobalData";

import { supabaseConfig } from "@src/lib/supabaseConfig";

import type { RefObject } from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import type { StudentFormValues, AddStudentParamList } from "@src/types";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import { WarningModal } from "@src/components";
import { useNewModalState } from "@src/hooks";

import {
  familyTypeInitialState,
  familyTypeReducer,
} from "@src/screens/AddButtonTabModalOptions/AddStudent/reducerHelper";

import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

type ParentRef = RefObject<ScrollView>;

type AddStudentNavigationProps = NativeStackNavigationProp<
  AddStudentParamList,
  "AddStudent"
>;

type Props = {
  scrollRef: ParentRef;
};

const Finalization = ({ scrollRef }: Props) => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation<AddStudentNavigationProps>();

  const [, familyTypeDispatch] = useReducer(
    familyTypeReducer,
    familyTypeInitialState,
  );
  const [modalVisible, openOrCloseModal] = useNewModalState();

  const { validateForm, setTouched, resetForm, isSubmitting, isValidating } =
    useFormikContext();

  const { submitForm, setChosenExistingFamily, values, styles, isLoading } =
    useAddStudentFormContext();

  const isOnFormSubmission = isLoading || isSubmitting || isValidating;

  const handleErrorStyles = (formValues: StudentFormValues) => {
    const { first_name, last_name, rate, family_first_name, family_last_name } =
      formValues;

    const touchedObject = {
      first_name: first_name.length === 0,
      last_name: last_name.length === 0,
      family_first_name: family_first_name.length === 0,
      family_last_name: family_last_name.length === 0,
      rate: rate.length === 0,
    };

    setTouched(touchedObject);
  };

  const handleLimitReset = () => {
    openOrCloseModal();
    setChosenExistingFamily("");
    familyTypeDispatch({ type: "NEW_FAMILY" });
    resetForm();

    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  const handleReset = () => {
    setChosenExistingFamily("");
    familyTypeDispatch({ type: "NEW_FAMILY" });
    resetForm();
  };

  const handleOnFormSubmit = async () => {
    handleErrorStyles(values);
    const errors = await validateForm();

    const hasErrors = Object.keys(errors).length > 0;

    const { data: isAtTierLimit } = await supabaseConfig.rpc(
      "check_student_limit_client",
    );

    if (isAtTierLimit) {
      navigator.navigate("StudentsNav");
      handleLimitReset();
      return;
    }

    if (hasErrors) {
      dispatch(setTimedStatusMessageType("Error"));
      dispatch(setTimedStatusMessageOccured(true));
    } else {
      await submitForm();
      navigator.navigate("StudentsNav");
      dispatch(setTimedStatusMessageType("Success"));
      dispatch(setTimedStatusMessageOccured(true));
      handleReset();
    }
  };

  const handleCancel = () => {
    resetForm();
    navigator.navigate("StudentsNav");
    dispatch(setTimedStatusMessageType("Canceled"));
    dispatch(setTimedStatusMessageOccured(true));
  };

  return (
    <View style={styles.saveOrCancelContainer}>
      <LinearGradient
        style={styles.saveButtonContainer}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleOnFormSubmit}
          disabled={isOnFormSubmission}
        >
          <Text style={styles.saveButtonText}>
            {isOnFormSubmission ? "Submitting..." : "Save"}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.cancelButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <WarningModal
        dispatchWarningAction={openOrCloseModal}
        warningHeaderText="Limit reached"
        warningBodyText="Thanks for using this app so much! We are still in beta and a free product. If you really want more storage please contact us at: protegecoresuite@gmail.com"
        warningActionText="Ok"
        modalVisible={modalVisible}
        openOrCloseModal={openOrCloseModal}
        isLimit
      />
    </View>
  );
};

export default Finalization;
