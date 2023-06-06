import { View, Text, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { UserStudent } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    blacks: { blackTransparent },
    gradients: { purpleGradient },
  },
} = globalStyles;

type Props = {
  type: "Students";
};

const DashboardCard = ({ type }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.touchableBackground}>
      {type === "Students" && (
        <TouchableHighlight
          style={styles.touchableContainer}
          underlayColor={blackTransparent}
        >
          <LinearGradient
            style={styles.dashboardCardContainer}
            colors={purpleGradient.colors}
            locations={purpleGradient.locations}
            start={purpleGradient.start}
            end={purpleGradient.end}
          >
            <View style={styles.circleDecoration}>
              <UserStudent style={styles.studentsIcon} />
            </View>
            <Text style={styles.studentsText}>7 / 50 Students</Text>
          </LinearGradient>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default DashboardCard;
