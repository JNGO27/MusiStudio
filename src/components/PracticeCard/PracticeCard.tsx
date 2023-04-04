import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { CardNavOption } from "@src/components";

import { ClockSvg, CalendarEmptySvg, ChartSvg } from "@src/assets/icons";

import createStyleSheet from "./styles";

import { areBothIntegers, calculateHours, calculateAverage } from "./helpers";

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

  const thereIsData = !!minutes_practiced;
  const hours = minutes_practiced ? calculateHours(minutes_practiced) : null;
  const bothAreNumbers = areBothIntegers(hours, days_practiced);
  const average = bothAreNumbers
    ? calculateAverage(hours as number, days_practiced as number)
    : null;

  return (
    <View style={styles.practiceCard}>
      <View style={styles.parentContainer}>
        <View style={styles.practiceDetailsContainer}>
          <View style={styles.practiceProfileContainer}>
            <ClockSvg style={styles.clockIcon} />
            {thereIsData ? (
              <Text style={styles.hoursPracticed}>{hours} hours practiced</Text>
            ) : (
              <Text style={styles.hoursPracticed}>
                no logged hours practiced
              </Text>
            )}
          </View>
          <View style={styles.contactInformationContainer}>
            <View style={styles.iconContainer}>
              <CalendarEmptySvg style={styles.calenderIcon} />
              {thereIsData ? (
                <Text style={styles.practiceInfoText}>
                  {days_practiced} days practiced
                </Text>
              ) : (
                <Text style={styles.practiceInfoText}>N / A</Text>
              )}
            </View>
            <View style={styles.iconContainer}>
              <ChartSvg style={styles.chartIcon} />

              {thereIsData ? (
                <Text style={styles.practiceInfoText}>
                  {average} hours average
                </Text>
              ) : (
                <Text style={styles.practiceInfoText}>N / A</Text>
              )}
            </View>
          </View>
        </View>
        <CardNavOption cardOption="PracticeCardDetails" />
      </View>
    </View>
  );
};

export default PracticeCard;
