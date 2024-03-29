import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StudentsHome,
  StudentCardDetails,
  FamilyCardDetails,
  PracticeCardDetails,
  EditStudent,
  EditFamily,
} from "@src/screens";

import type { CardsNavParamList } from "@src/types";

const Stack = createNativeStackNavigator<CardsNavParamList>();

const noHeaderOption = { headerShown: false };
const noHeaderWithAnimation = {
  headerShown: false,
  animation: "slide_from_right",
} as const;

const StudentsNav = () => {
  return (
    <Stack.Navigator initialRouteName="StudentsHome">
      <Stack.Screen
        options={noHeaderOption}
        name="StudentsHome"
        component={StudentsHome}
      />
      <Stack.Screen
        options={noHeaderWithAnimation}
        name="StudentCardDetails"
        component={StudentCardDetails}
      />
      <Stack.Screen
        options={noHeaderWithAnimation}
        name="FamilyCardDetails"
        component={FamilyCardDetails}
      />
      <Stack.Screen
        options={noHeaderWithAnimation}
        name="PracticeCardDetails"
        component={PracticeCardDetails}
      />
      <Stack.Screen
        options={noHeaderWithAnimation}
        name="EditStudent"
        component={EditStudent}
      />
      <Stack.Screen
        options={noHeaderWithAnimation}
        name="EditFamily"
        component={EditFamily}
      />
    </Stack.Navigator>
  );
};

export default StudentsNav;
