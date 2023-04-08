import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeNav, StudentsNav } from "@src/navigation";
import { AddButtonTab } from "@src/components";

const Tab = createBottomTabNavigator();

const PlaceHolderComponent = () => null;

const TabNavigator = () => {
  const noHeaderOption = { headerShown: false };

  return (
    <Tab.Navigator>
      <Tab.Screen options={noHeaderOption} name="HomeNav" component={HomeNav} />
      <Tab.Screen
        options={{
          tabBarButton: AddButtonTab,
        }}
        name="Add"
        component={PlaceHolderComponent}
      />
      <Tab.Screen
        options={noHeaderOption}
        name="StudentsNav"
        component={StudentsNav}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
