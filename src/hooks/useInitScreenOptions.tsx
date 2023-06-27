import { HomeIcon, UserStudent } from "@src/assets/icons";

import type { Route } from "@react-navigation/native";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import type { TabNavigatorParamList } from "@src/types";

import { useResponsiveness, useIsNestedScreen } from "@src/hooks";

import createStyleSheet from "@src/navigation/TabNavigator/tabBarStyles";

import globalStyles from "@src/globalStyles";

const { spacing, getBreakpoints } = globalStyles;

type ScreenOptionsProps = {
  route: Route<keyof TabNavigatorParamList>;
};

const useInitScreenOptions = () => {
  const isNested = useIsNestedScreen();

  const [horizontalScale, verticalScale, moderateScale, dimensionWidth] =
    useResponsiveness();

  const getDeviceSize = getBreakpoints(dimensionWidth);
  const isXS = getDeviceSize === "XS";

  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    isNested,
    isXS,
  );

  const iconSize = isXS
    ? horizontalScale(spacing.multipleL * 1.75)
    : horizontalScale(spacing.multipleL * 2);

  return ({ route }: ScreenOptionsProps): BottomTabNavigationOptions => ({
    // eslint-disable-next-line consistent-return
    tabBarIcon: ({ color }) => {
      if (route.name === "HomeNav") {
        return <HomeIcon color={color} width={iconSize} height={iconSize} />;
      }

      if (route.name === "StudentsNav") {
        return <UserStudent color={color} width={iconSize} height={iconSize} />;
      }
    },
    tabBarStyle: styles.tabBarStyleSheet,
    tabBarHideOnKeyboard: true,
  });
};

export default useInitScreenOptions;
