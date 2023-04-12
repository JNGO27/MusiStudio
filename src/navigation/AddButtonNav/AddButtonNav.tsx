import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddButtonModal } from "@src/components";

import type { AddTabParamList } from "@src/types";

const Stack = createNativeStackNavigator<AddTabParamList>();

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

const modalScreenPresentationOption = {
  presentation: "containedTransparentModal",
} as const;

const AddButtonNav = () => {
  return (
    <Stack.Navigator screenOptions={modalScreenPresentationOption}>
      <Stack.Screen
        options={modalScreenPresentationOption}
        name="AddButtonModalScreen"
        component={AddButtonModal}
      />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default AddButtonNav;
