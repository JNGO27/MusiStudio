/* eslint-disable @typescript-eslint/naming-convention */
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormikContext } from "formik";
import { useAppDispatch } from "@src/redux";

import {
  setTimedStatusMessageOccured,
  setTimedStatusMessageType,
} from "@src/redux/features/generalGlobalData";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import type { StudentFormValues, AddStudentParamList } from "@src/types";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";

import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

type AddStudentNavigationProps = NativeStackNavigationProp<
  AddStudentParamList,
  "AddStudent"
>;

const Finalization = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation<AddStudentNavigationProps>();
  const { validateForm, setTouched } = useFormikContext();
  const { handleSubmit, values, styles } = useAddStudentFormContext();

  const handleErrorStyles = (formValues: StudentFormValues) => {
    const { first_name, last_name, family_first_name, family_last_name, rate } =
      formValues;

    setTouched({
      first_name: first_name.length === 0,
      last_name: last_name.length === 0,
      family_first_name: family_first_name.length === 0,
      family_last_name: family_last_name.length === 0,
      rate: rate.length === 0,
    });
  };

  const handleOnFormSubmit = async () => {
    const errors = await validateForm();
    handleErrorStyles(values);
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      dispatch(setTimedStatusMessageType("Error"));
      dispatch(setTimedStatusMessageOccured(true));
    } else {
      handleSubmit();
      navigator.navigate("StudentsNav");
      dispatch(setTimedStatusMessageType("Success"));
      dispatch(setTimedStatusMessageOccured(true));
    }
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
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.cancelButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Finalization;
