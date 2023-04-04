import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

import type { CardsNavTypes } from "@src/types";

const Stack = createNativeStackNavigator<CardsNavTypes>();

const noHeader = { headerShown: false };

const TemporaryExample = () => {
  return <Text>Example</Text>;
};

const CardsNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={noHeader}
          name="StudentCardDetails"
          component={TemporaryExample}
        />
        <Stack.Screen
          options={noHeader}
          name="FamilyCardDetails"
          component={TemporaryExample}
        />
        <Stack.Screen
          options={noHeader}
          name="PracticeCardDetails"
          component={TemporaryExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CardsNav;
