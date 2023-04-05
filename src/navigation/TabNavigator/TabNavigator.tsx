import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const ExampleComponent = () => <Text>Example</Text>;

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExampleComponent" component={ExampleComponent} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
