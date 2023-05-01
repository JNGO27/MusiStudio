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

const StudentDetails = ({
  values,
  handleChange,
  handleBlur,
  styles,
}: Props) => {
  return (
    <View style={styles.formSection}>
      <Text style={styles.formSectionHeaderText}>Student Details</Text>
      <TextInput
        style={styles.input}
        value={values.first_name}
        onChangeText={handleChange("first_name")}
        onBlur={handleBlur("first_name")}
        placeholder="First Name *"
        selectionColor={purples.purple100}
      />
      <TextInput
        style={styles.input}
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
