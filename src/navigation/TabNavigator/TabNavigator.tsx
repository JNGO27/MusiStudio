import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeNav, StudentsNav } from "@src/navigation";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const noHeaderOption = { headerShown: false };

  return (
    <Tab.Navigator>
      <Tab.Screen options={noHeaderOption} name="HomeNav" component={HomeNav} />
      <Tab.Screen
        options={noHeaderOption}
        name="StudentsNav"
        component={StudentsNav}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
