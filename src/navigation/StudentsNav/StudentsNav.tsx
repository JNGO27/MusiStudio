import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { CardsNavParamList } from "@src/types";
import { StudentsHome } from "@src/screens";
import {
  StudentCardDetails,
  FamilyCardDetails,
  PracticeCardDetails,
} from "@src/screens/Students";

const Stack = createNativeStackNavigator<CardsNavParamList>();

const noHeaderOption = { headerShown: false };

const StudentsNav = () => {
  return (
    <Stack.Navigator initialRouteName="StudentsHome">
      <Stack.Screen
        options={noHeaderOption}
        name="StudentsHome"
        component={StudentsHome}
      />
      <Stack.Screen
        options={noHeaderOption}
        name="StudentCardDetails"
        component={StudentCardDetails}
      />
      <Stack.Screen
        options={noHeaderOption}
        name="FamilyCardDetails"
        component={FamilyCardDetails}
      />
      <Stack.Screen
        options={noHeaderOption}
        name="PracticeCardDetails"
        component={PracticeCardDetails}
      />
    </Stack.Navigator>
  );
};

export default StudentsNav;
