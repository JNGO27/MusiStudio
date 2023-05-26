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

const AdditionalStudentDetails = () => {
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
            value={values.instrument}
            onChangeText={handleChange("instrument")}
            onBlur={handleBlur("instrument")}
            placeholder="Instrument"
            selectionColor={purples.purple100}
          />
          <TextInput
            style={styles.input}
            value={values.skill_level}
            onChangeText={handleChange("skill_level")}
            onBlur={handleBlur("skill_level")}
            placeholder="Skill Level"
            selectionColor={purples.purple100}
          />
          <TextInput
            style={styles.input}
            value={values.gender}
            onChangeText={handleChange("gender")}
            onBlur={handleBlur("gender")}
            placeholder="Gender"
            keyboardType="numeric"
            selectionColor={purples.purple100}
          />
        </View>
      </Accordian>
    </View>
  );
};

export default AdditionalStudentDetails;
