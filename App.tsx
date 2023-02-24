import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, Students } from "./screens";

export type RootStackParamList = {
  Home: undefined;
  Students: undefined;
  Calender: undefined;
  Repertoire: undefined;
  Milage: undefined;
  Billing: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Students"
          component={Students}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
