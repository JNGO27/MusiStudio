import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppDispatch } from "@src/redux";
import { setRoute } from "@src/redux/features/generalGlobalData";

import { TabNavigator, HeaderNav } from "@src/navigation";
import { Header } from "@src/components";

import type { RootStackParamList } from "@src/types";

import { getActiveRouteName } from "./helpers";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  const dispatch = useAppDispatch();

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const currentRoute = getActiveRouteName(state);
        dispatch(setRoute(currentRoute));
      }}
    >
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
