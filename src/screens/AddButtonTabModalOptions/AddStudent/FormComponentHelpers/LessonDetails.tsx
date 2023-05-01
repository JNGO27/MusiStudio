import { View, Text, TextInput } from "react-native";

import type { FormikHandlers } from "formik";

import type { StudentFormValues, StyleSheetProps } from "@src/types";

import globalStyles from "@src/globalStyles";

type Props = {
  values: StudentFormValues;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  styles: StyleSheetProps;
};

const {
  colors: { purples },
} = globalStyles;

const LessonDetails = ({ values, handleChange, handleBlur, styles }: Props) => {
  return (
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
  );
};

export default LessonDetails;
