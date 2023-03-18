import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import type { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { CheckboxContext } from "@src/Contexts/CheckboxContext";
import {
  Auth,
  EmailOnlyAuth,
  SignUp,
  SignIn,
  ForgotPassword,
  ResetForm,
} from "@src/screens";
import type { AuthStackParamList } from "@src/types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const noHeader = { headerShown: false };

const prefix = Linking.createURL("/auth");

const linking: LinkingOptions<AuthStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      AuthHome: "home",
      Email: "email",
      SignUp: "signup",
      SignIn: "signin",
      ResetForm: "reset-form",
    },
  },
};

const AuthNav = () => {
  return (
    <CheckboxContext>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen options={noHeader} name="AuthHome" component={Auth} />
          <Stack.Screen
            options={noHeader}
            name="Email"
            component={EmailOnlyAuth}
          />
          <Stack.Screen options={noHeader} name="SignUp" component={SignUp} />
          <Stack.Screen options={noHeader} name="SignIn" component={SignIn} />
          <Stack.Screen
            options={noHeader}
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            options={noHeader}
            name="ResetForm"
            component={ResetForm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CheckboxContext>
  );
};

export default AuthNav;
