import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import type { FormikHandlers } from "formik";

import type { StyleSheetProps, FormikSubmit } from "@src/types";

import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

type Props = {
  handleSubmit: FormikHandlers["handleSubmit"];
  styles: StyleSheetProps;
};

const Finalization = ({ handleSubmit, styles }: Props) => {
  return (
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
  );
};

export default Finalization;
