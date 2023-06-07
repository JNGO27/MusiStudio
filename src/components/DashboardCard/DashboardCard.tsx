import { View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { HomeTabScreenParamList } from "@src/types";

import { useGetStudentsCountQuery } from "@src/redux/services/supabaseAPI";

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

type TypePossibilities = "Students";

type NavigationOptionsTypes = {
  [type in TypePossibilities]: keyof HomeTabScreenParamList;
};

type DashboardCardNavigationProps = NativeStackNavigationProp<
  HomeTabScreenParamList,
  "HomeTabScreen"
>;

type Props = {
  type: TypePossibilities;
};

const navigationOptions: NavigationOptionsTypes = {
  Students: "StudentsNav",
} as const;

const DashboardCard = ({ type }: Props) => {
  const { data: studentCount, isLoading } = useGetStudentsCountQuery({});
  const navigator = useNavigation<DashboardCardNavigationProps>();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleNavigation = () => {
    const screen = navigationOptions[type];
    navigator.navigate(screen);
  };

  return (
    <View style={styles.touchableBackground}>
      {type === "Students" && (
        <TouchableHighlight
          style={styles.touchableContainer}
          underlayColor={blackTransparent}
          onPress={handleNavigation}
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
            {isLoading ? (
              <Text style={styles.loadingText}>...</Text>
            ) : (
              <Text style={styles.studentsText}>
                {studentCount} / 50 Students
              </Text>
            )}
          </LinearGradient>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default DashboardCard;
