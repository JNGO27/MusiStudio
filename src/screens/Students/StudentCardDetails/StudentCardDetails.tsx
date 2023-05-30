import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "@src/redux";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { CardsNavParamList } from "@src/types";

import { getGlobalStudentData } from "@src/redux/selectors";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { EditIcon, DeleteIcon } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

type NavigationProps = NativeStackNavigationProp<
  CardsNavParamList,
  "StudentCardDetails"
>;

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const StudentCardDetails = () => {
  const navigator = useNavigation<NavigationProps>();
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
    ratePerTime = `Per ${studentData?.lesson_length || ""} minute session`;
  }

  const handleEditNavigation = () => navigator.navigate("EditStudent");

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
          <Text style={styles.studentDetailHeadline}>Age:</Text>
          <Text style={styles.studentDetailSubline}>{studentData?.age}</Text>
        </View>
        <View style={styles.studentDetailContainer}>
          <Text style={styles.studentDetailHeadline}>Gender:</Text>
          <Text style={styles.studentDetailSubline}>{studentData?.gender}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditNavigation}>
          <EditIcon style={styles.icon} />
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button}>
          <DeleteIcon style={styles.icon} />
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudentCardDetails;
