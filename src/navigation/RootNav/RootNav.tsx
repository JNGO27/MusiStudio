import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigator, HeaderNav } from "@src/navigation";
import { Header } from "@src/components";

import type { RootStackParamList } from "@src/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          header: Header,
        }}
      >
        <RootStack.Screen name="TabNavigator" component={TabNavigator} />
        <RootStack.Screen
          name="HeaderNav"
          options={{ headerShown: false }}
          component={HeaderNav}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
