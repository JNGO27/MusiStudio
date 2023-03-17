import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import type { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { Auth, SignUp, SignIn, ForgotPassword } from "@src/screens";
import type { AuthStackParamList } from "@src/types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const noHeader = { headerShown: false };

const prefix = Linking.createURL("/auth");

const linking: LinkingOptions<AuthStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      AuthHome: "home",
      SignUp: "signup",
      SignIn: "signin",
    },
  },
};

const AuthNav = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen options={noHeader} name="AuthHome" component={Auth} />
        <Stack.Screen options={noHeader} name="SignUp" component={SignUp} />
        <Stack.Screen options={noHeader} name="SignIn" component={SignIn} />
        <Stack.Screen
          options={noHeader}
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNav;
