import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAppSelector } from "@src/redux";

import { getGlobalStudentData } from "@src/redux/selectors";

import useResponsiveness from "@src/hooks/useResponsiveness";
import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const StudentCardDetails = () => {
  const studentData = useAppSelector(getGlobalStudentData);
  let ratePerTime;

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  if (studentData?.rate_per_time === "per_hour") {
    ratePerTime = "Per Hour";
  } else if (studentData?.rate_per_time === "per_month") {
    ratePerTime = "Per Month";
  } else if (studentData?.rate_per_time === "per_lesson") {
    ratePerTime = `Per ${studentData?.lesson_length || ""} Minutes`;
  }

  return (
    <View style={styles.detailsContainer}>
      <LinearGradient
        style={styles.gradientDecoration}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <Text style={styles.headlineText}>Student Details</Text>
      </LinearGradient>
      <View style={styles.detailsContent}>
        <View style={styles.rateContainer}>
          <Text style={styles.rateHeadline}>Rate:</Text>
          <View style={styles.rateInnerContainer}>
            <Text style={styles.rateAmount}>${studentData?.rate}</Text>
            <Text style={styles.rateSubline}>{ratePerTime}</Text>
          </View>
        </View>
        <View style={styles.studentDetailContainer}>
          <Text style={styles.studentDetailHeadline}>Instrument:</Text>
          <Text style={styles.studentDetailSubline}>
            {studentData?.instrument}
          </Text>
        </View>
        <View style={styles.studentDetailContainer}>
          <Text style={styles.studentDetailHeadline}>Skill Level:</Text>
          <Text style={styles.studentDetailSubline}>
            {studentData?.skill_level}
          </Text>
        </View>
        <View style={styles.studentDetailContainer}>
          <Text style={styles.studentDetailHeadline}>Gender:</Text>
          <Text style={styles.studentDetailSubline}>{studentData?.gender}</Text>
        </View>
      </View>
    </View>
  );
};

export default StudentCardDetails;
