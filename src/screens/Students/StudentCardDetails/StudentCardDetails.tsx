import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import useResponsiveness from "@src/hooks/useResponsiveness";
import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const StudentCardDetails = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

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
        <Text style={styles.rateHeadline}>Rate</Text>
      </View>
    </View>
  );
};

export default StudentCardDetails;
