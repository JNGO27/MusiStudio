import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppDispatch } from "@src/redux";
import { setRoute } from "@src/redux/features/generalGlobalData";

import { TabNavigator, HeaderNav } from "@src/navigation";
import { Header } from "@src/components";

import type { NavigationState } from "@react-navigation/native";

import type { RootStackParamList } from "@src/types";

import { getActiveRouteName } from "./helpers";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  const dispatch = useAppDispatch();

  const onStateChange = useCallback(
    (state: NavigationState | undefined) => {
      const currentRoute = getActiveRouteName(state);
      dispatch(setRoute(currentRoute));
    },
    [dispatch],
  );

  const HeaderRenderer = useCallback(() => <Header />, []);

  return (
    <NavigationContainer onStateChange={onStateChange}>
      <RootStack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          header: HeaderRenderer,
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
