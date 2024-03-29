import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { HeaderStackParamList } from "@src/types";

import {
  AccountHome,
  AccountInformation,
  About,
  PrivacyPolicy,
  TermsAndConditions,
} from "@src/screens";

const Stack = createNativeStackNavigator<HeaderStackParamList>();

const HeaderNav = () => {
  return (
    <Stack.Navigator initialRouteName="AccountHome">
      <Stack.Screen
        name="AccountHome"
        options={{
          headerShown: false,
        }}
        component={AccountHome}
      />
      <Stack.Screen
        name="AccountInformation"
        options={{
          headerShown: false,
        }}
        component={AccountInformation}
      />
      <Stack.Screen
        name="About"
        options={{
          headerShown: false,
        }}
        component={About}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={{
          headerShown: false,
        }}
        component={PrivacyPolicy}
      />
      <Stack.Screen
        name="TermsAndConditions"
        options={{
          headerShown: false,
        }}
        component={TermsAndConditions}
      />
    </Stack.Navigator>
  );
};

export default HeaderNav;
