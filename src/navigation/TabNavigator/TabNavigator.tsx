import { useCallback } from "react";
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

  const tabScreenOption1 = {
    headerShown: false,
    title: "Home",
    tabBarActiveTintColor: purples.purple100,
    tabBarHideOnKeyboard: true,
    tabBarItemStyle: styles.tabBarItemStyleSheet1,
  };

  const tabScreenOption2 = {
    headerShown: false,
    title: "Students",
    tabBarActiveTintColor: purples.purple100,
    tabBarHideOnKeyboard: true,
    tabBarItemStyle: styles.tabBarItemStyleSheet2,
  };

  const AddButtonRenderer = useCallback(() => <AddButtonTab />, []);

  return (
    <AddButtonModalContext>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          options={tabScreenOption1}
          name="HomeNav"
          component={HomeNav}
        />
        <Tab.Screen
          options={tabScreenOption2}
          name="StudentsNav"
          component={StudentsNav}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: AddButtonRenderer,
          }}
          name="AddTab"
          component={AddButtonNav}
        />
      </Tab.Navigator>
    </AddButtonModalContext>
  );
};

export default TabNavigator;
