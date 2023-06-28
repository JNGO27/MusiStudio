import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import type { LinkingOptions } from "@react-navigation/native";

import { AuthModalContext } from "@src/contexts/AuthModalContext";
import {
  AuthHome,
  EmailOnlyAuth,
  PrivacyPolicy,
  TermsAndConditions,
} from "@src/screens";

import type { AuthStackParamList } from "@src/types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const noHeaderAndAnimation = { headerShown: false, animationEnabled: false };

const prefix = Linking.createURL("auth");

const linking: LinkingOptions<AuthStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      AuthHome: "home",
      Email: "email",
      PrivacyPolicy: "privacypolicy",
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
          <Stack.Screen
            options={noHeaderAndAnimation}
            name="PrivacyPolicy"
            component={PrivacyPolicy}
          />
          <Stack.Screen
            options={noHeaderAndAnimation}
            name="TermsAndConditions"
            component={TermsAndConditions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthModalContext>
  );
};

export default AuthNav;
