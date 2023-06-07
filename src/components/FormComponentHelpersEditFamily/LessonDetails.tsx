import { View, Text, TextInput } from "react-native";

import { useEditStudentFormContext } from "@src/contexts/EditStudentFormContext";

import globalStyles from "@src/globalStyles";

const {
  colors: { purples },
} = globalStyles;

const LessonDetails = () => {
  const { values, handleChange, handleBlur, styles } =
    useEditStudentFormContext();

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
