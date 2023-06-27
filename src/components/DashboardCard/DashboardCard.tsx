/* eslint-disable no-nested-ternary */
import { View, Text, TouchableHighlight, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type {
  HomeTabScreenParamList,
  NavigationOptionsTypes,
} from "@src/types";

import { useGetStudentsCountQuery } from "@src/redux/services/supabaseAPI";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { ThreeDotsLoading } from "@src/components";

import { UserStudent } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  spacing,
  colors: {
    blacks: { blackTransparent },
    gradients: { purpleGradient },
  },
} = globalStyles;

type TypePossibilities = "Students";

type DashboardCardNavigationProps = NativeStackNavigationProp<
  HomeTabScreenParamList,
  "HomeTabScreen"
>;

type Props = {
  type: TypePossibilities;
};

const navigationOptions: NavigationOptionsTypes<
  TypePossibilities,
  HomeTabScreenParamList
> = {
  Students: "StudentsNav",
} as const;

const DashboardCard = ({ type }: Props) => {
  const { data: studentCount, isLoading } = useGetStudentsCountQuery({});
  const navigator = useNavigation<DashboardCardNavigationProps>();
  const isIOS = Platform.OS === "ios";

  const [horizontalScale, verticalScale, moderateScale, dimensionWidth] =
    useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionWidth,
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
            <View style={styles.textAndLoadingContainer}>
              {isIOS ? (
                isLoading ? (
                  <ThreeDotsLoading
                    dotSize={spacing.multipleReg}
                    dotColor="white"
                  />
                ) : (
                  <View style={styles.iosStudentTextContainer}>
                    <Text style={styles.iosStudentsText}>
                      {studentCount} / 25
                    </Text>
                    <Text style={styles.iosStudentsText}>Students</Text>
                  </View>
                )
              ) : isLoading ? (
                <ThreeDotsLoading
                  dotSize={spacing.multipleReg}
                  dotColor="white"
                />
              ) : (
                <Text style={styles.studentsText}>
                  {studentCount} / 25 Students
                </Text>
              )}
            </View>
          </LinearGradient>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default DashboardCard;
