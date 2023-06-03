import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { HeaderStackParamList } from "@src/types";

import { AccountHome } from "@src/screens";

const Stack = createNativeStackNavigator<HeaderStackParamList>();

const HeaderNav = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        options={{
          headerShown: false,
        }}
        component={AccountHome}
      />
    </Stack.Navigator>
  );
};

export default HeaderNav;
