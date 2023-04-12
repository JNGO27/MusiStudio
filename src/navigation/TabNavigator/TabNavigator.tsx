import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { TabNavigatorParamList } from "@src/types";

import { AddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { HomeNav, AddButtonNav, StudentsNav } from "@src/navigation";
import { AddButtonTab } from "@src/components";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
  const noHeaderOption = { headerShown: false };

  return (
    <AddButtonModalContext>
      <Tab.Navigator>
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
