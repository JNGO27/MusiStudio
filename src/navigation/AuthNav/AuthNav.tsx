import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Auth, SignUp, SignIn } from "../../screens";
import type { AuthStackParamList } from "../../types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="AuthHome"
          component={Auth}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNav;
