import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

import type { CardsNavParamList } from "@src/types";
import { Students } from "@src/screens";

const Stack = createNativeStackNavigator<CardsNavParamList>();

const noHeaderOption = { headerShown: false };

const TemporaryExample = () => {
  return <Text>Example</Text>;
};

const CardsNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={noHeaderOption}
          name="Students"
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
          component={TemporaryExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CardsNav;
