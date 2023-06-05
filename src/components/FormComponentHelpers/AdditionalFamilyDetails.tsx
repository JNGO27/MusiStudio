/* eslint-disable import/order */
import { View, TextInput } from "react-native";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import { useResponsiveness } from "@src/hooks";
import { Accordian } from "@src/components";

import createAccordianStyles from "./accordianStyles";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { purples },
} = globalStyles;

const AdditionalFamilyDetails = () => {
  const { values, handleChange, handleBlur, styles } =
    useAddStudentFormContext();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();

  const accordianStyles = createAccordianStyles(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View>
      <Accordian
        unOpenedText="Hide additional details"
        openedText="Show additional details"
        openedAnimatedHeight={verticalScale(spacing.multipleXL * 16)}
        styleSheet={accordianStyles}
        iconClosed="+"
        iconOpen="-"
      >
        <View style={styles.accordianFormSection}>
          <TextInput
            style={styles.input}
            value={values.family_first_name_2}
            onChangeText={handleChange("family_first_name_2")}
            onBlur={handleBlur("family_first_name_2")}
            placeholder="Parent 2 First Name"
            selectionColor={purples.purple100}
          />
          <TextInput
            style={styles.input}
            value={values.family_last_name_2}
            onChangeText={handleChange("family_last_name_2")}
            onBlur={handleBlur("family_last_name_2")}
            placeholder="Parent 2 Last Name"
            selectionColor={purples.purple100}
          />
          <TextInput
            style={styles.input}
            value={values.family_phone_number_2}
            onChangeText={handleChange("family_phone_number_2")}
            onBlur={handleBlur("family_phone_number_2")}
            placeholder="Parent 2 Phone Number"
            keyboardType="numeric"
            selectionColor={purples.purple100}
          />
          <TextInput
            style={styles.input}
            value={values.family_email_2}
            onChangeText={handleChange("family_email_2")}
            onBlur={handleBlur("family_email_2")}
            placeholder="Parent 2 Email"
            selectionColor={purples.purple100}
          />
        </View>
      </Accordian>
    </View>
  );
};

export default AdditionalFamilyDetails;
