import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import type { LinkingOptions } from "@react-navigation/native";

import { AuthModalContext } from "@src/contexts/AuthModalContext";
import { AuthHome, EmailOnlyAuth } from "@src/screens";

import type { AuthStackParamList } from "@src/types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const noHeaderAndAnimation = { headerShown: false, animationEnabled: false };

const prefix = Linking.createURL("/auth");

const linking: LinkingOptions<AuthStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      AuthHome: "home",
      Email: "email",
    },
  },
};

const AuthNav = () => {
  return (
    <AuthModalContext>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{
            animation: "none",
          }}
        >
          <Stack.Screen
            options={noHeaderAndAnimation}
            name="AuthHome"
            component={AuthHome}
          />
          <Stack.Screen
            options={noHeaderAndAnimation}
            name="Email"
            component={EmailOnlyAuth}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthModalContext>
  );
};

export default AuthNav;
