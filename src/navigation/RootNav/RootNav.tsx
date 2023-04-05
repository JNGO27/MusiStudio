import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigator } from "@src/navigation";

import type { RootStackParamList } from "@src/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="TabNavigator"
          component={TabNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
