import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import type { CardsNavParamList } from "@src/types";
import { Students } from "@src/screens";
import PracticeCardDetails from "@src/screens/Students/PracticeCardDetails/PracticeCardDetails";

const Stack = createNativeStackNavigator<CardsNavParamList>();

const noHeaderOption = { headerShown: false };

const TemporaryExample = () => {
  return <Text>Example</Text>;
};

const StudentsNav = () => {
  return (
    <Stack.Navigator initialRouteName="StudentsHome">
      <Stack.Screen
        options={noHeaderOption}
        name="StudentsHome"
        component={Students}
      />
      <Stack.Screen
        options={noHeaderOption}
        name="StudentCardDetails"
        component={TemporaryExample}
      />
      <Stack.Screen
        options={noHeaderOption}
        name="FamilyCardDetails"
        component={TemporaryExample}
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
