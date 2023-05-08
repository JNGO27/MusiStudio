import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { TabNavigatorParamList } from "@src/types";

import { AddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { useBottomTabGoneOnKeyboardFocus } from "@src/hooks";
import { HomeNav, AddButtonNav, StudentsNav } from "@src/navigation";
import { AddButtonTab } from "@src/components";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
  const isKeyboardFocused = useBottomTabGoneOnKeyboardFocus();
  const noHeaderOption = { headerShown: false };

  return (
    <AddButtonModalContext>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: isKeyboardFocused ? "none" : "flex" },
        }}
      >
        <Tab.Screen
          options={noHeaderOption}
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
          options={noHeaderOption}
          name="StudentsNav"
          component={StudentsNav}
        />
      </Tab.Navigator>
    </AddButtonModalContext>
  );
};

export default TabNavigator;
