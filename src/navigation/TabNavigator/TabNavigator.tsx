import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Text>TabNavigator</Text>
    </Tab.Navigator>
  );
};

export default TabNavigator;
