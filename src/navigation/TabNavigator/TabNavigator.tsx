import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { TabNavigatorParamList } from "@src/types";

import { AddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { HomeNav, AddButtonNav, StudentsNav } from "@src/navigation";
import { AddButtonTab } from "@src/components";
import { useInitScreenOptions, useResponsiveness } from "@src/hooks";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const {
  colors: { purples },
} = globalStyles;

const TabNavigator = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );
  const screenOptions = useInitScreenOptions();
  const tabScreenOption = {
    headerShown: false,
    title: "Home",
    tabBarActiveTintColor: purples.purple100,
    tabBarHideOnKeyboard: true,
    tabBarItemStyle: styles.tabBarItemStyleSheet,
  };

  return (
    <AddButtonModalContext>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          options={tabScreenOption}
          name="HomeNav"
          component={HomeNav}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: AddButtonTab,
          }}
          name="AddTab"
          component={AddButtonNav}
        />
        <Tab.Screen
          options={tabScreenOption}
          name="StudentsNav"
          component={StudentsNav}
        />
      </Tab.Navigator>
    </AddButtonModalContext>
  );
};

export default TabNavigator;
