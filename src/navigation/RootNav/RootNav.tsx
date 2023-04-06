import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigator } from "@src/navigation";
import { Header } from "@src/components";

import type { RootStackParamList } from "@src/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  return (
    <NavigationContainer>
      <Header />
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
