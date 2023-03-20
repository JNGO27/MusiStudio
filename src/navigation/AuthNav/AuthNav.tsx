import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import type { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { ModalContext } from "@src/Contexts/ModalContext";
import { Auth, EmailOnlyAuth } from "@src/screens";
import type { AuthStackParamList } from "@src/types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const noHeader = { headerShown: false };

const prefix = Linking.createURL("/auth");

const linking: LinkingOptions<AuthStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      AuthHome: "home",
      Email: "email",
    },
  },
};

const AuthNav = () => {
  return (
    <ModalContext>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen options={noHeader} name="AuthHome" component={Auth} />
          <Stack.Screen
            options={noHeader}
            name="Email"
            component={EmailOnlyAuth}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ModalContext>
  );
};

export default AuthNav;
