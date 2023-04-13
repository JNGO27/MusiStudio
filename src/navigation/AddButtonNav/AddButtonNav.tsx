import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddButtonModal } from "@src/components";
import { AddStudent } from "@src/screens";

import type { AddTabParamList } from "@src/types";

const Stack = createNativeStackNavigator<AddTabParamList>();

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
      <Stack.Screen name="AddStudent" component={AddStudent} />
    </Stack.Navigator>
  );
};

export default AddButtonNav;
