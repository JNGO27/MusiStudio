import { View, Text } from "react-native";

import { ClockSvg, CalendarEmptySvg, ChartSvg } from "@src/assets/icons";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  minutes_practiced: number | undefined;
  days_practiced: number | undefined;
};

const PracticeCard = ({ minutes_practiced, days_practiced }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const noData = !!minutes_practiced;
  const hours = minutes_practiced ? minutes_practiced / 60 : null;
  const average =
    hours && days_practiced ? (hours / days_practiced).toFixed(2) : null;

  return (
    <View style={styles.practiceCard}>
      {noData ? (
        <>
          <View style={styles.practiceProfileContainer}>
            <ClockSvg style={styles.clockIcon} />
            <Text style={styles.hoursPracticed}>{hours} hours practiced</Text>
          </View>
          <View style={styles.contactInformationContainer}>
            <View style={styles.iconContainer}>
              <CalendarEmptySvg style={styles.calenderIcon} />
              <Text style={styles.practiceInfoText}>
                {days_practiced} days practiced
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <ChartSvg style={styles.chartIcon} />
              <Text style={styles.practiceInfoText}>
                {average} hours average
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.practiceProfileContainer}>
            <ClockSvg style={styles.clockIcon} />
            <Text style={styles.hoursPracticed}>no logged hours practiced</Text>
          </View>
          <View style={styles.contactInformationContainer}>
            <View style={styles.iconContainer}>
              <CalendarEmptySvg style={styles.calenderIcon} />
              <Text style={styles.practiceInfoText}>N / A</Text>
            </View>
            <View style={styles.iconContainer}>
              <ChartSvg style={styles.chartIcon} />
              <Text style={styles.practiceInfoText}>N / A</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default PracticeCard;
