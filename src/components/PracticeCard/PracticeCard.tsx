import { View, Text } from "react-native";

import { ClockSvg, CalendarEmptySvg, ChartSvg } from "@src/assets/icons";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const PracticeCard = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.practiceCard}>
      <View style={styles.practiceProfileContainer}>
        <ClockSvg style={styles.clockIcon} />
        <Text style={styles.hoursPracticed}>12 hours Practiced</Text>
      </View>
      <View style={styles.contactInformationContainer}>
        <View style={styles.iconContainer}>
          <CalendarEmptySvg style={styles.calenderIcon} />
          <Text style={styles.practiceInfoText}>2 days practiced</Text>
        </View>
        <View style={styles.iconContainer}>
          <ChartSvg style={styles.chartIcon} color="black" />
          <Text style={styles.practiceInfoText}>1.5 hours Average</Text>
        </View>
      </View>
    </View>
  );
};

export default PracticeCard;
