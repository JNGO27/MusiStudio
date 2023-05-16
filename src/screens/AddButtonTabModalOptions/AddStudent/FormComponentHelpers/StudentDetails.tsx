import { View, Text, TextInput } from "react-native";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";

import globalStyles from "@src/globalStyles";

const {
  colors: { purples },
} = globalStyles;

const StudentDetails = () => {
  const { values, errors, touched, handleChange, handleBlur, styles } =
    useAddStudentFormContext();

  const validationStyles = {
    firstName:
      errors.first_name && touched.first_name
        ? styles.errorInput
        : styles.input,
    lastName:
      errors.last_name && touched.last_name ? styles.errorInput : styles.input,
  };

  return (
    <View style={styles.formSection}>
      <Text style={styles.formSectionHeaderText}>Student Details</Text>
      <TextInput
        style={validationStyles.firstName}
        value={values.first_name}
        onChangeText={handleChange("first_name")}
        onBlur={handleBlur("first_name")}
        placeholder="First Name *"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={validationStyles.lastName}
        value={values.last_name}
        onChangeText={handleChange("last_name")}
        onBlur={handleBlur("last_name")}
        placeholder="Last Name *"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={styles.input}
        value={values.phone_number}
        onChangeText={handleChange("phone_number")}
        onBlur={handleBlur("phone_number")}
        placeholder="Phone Number"
        keyboardType="numeric"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={styles.input}
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        placeholder="Email"
        selectionColor={purples.purple100}
      />
    </View>
  );
};

export default StudentDetails;
