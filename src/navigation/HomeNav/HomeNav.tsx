import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@src/screens";

import { HomeTabScreenParamList } from "@src/types";

const Stack = createNativeStackNavigator<HomeTabScreenParamList>();

const HomeNav = () => {
  const noHeaderOption = { headerShown: false };

  return (
    <Stack.Navigator initialRouteName="HomeTabScreen">
      <Stack.Screen
        name="HomeTabScreen"
        options={noHeaderOption}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
