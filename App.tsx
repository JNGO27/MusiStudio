import { useState, useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import {
  useFonts,
  Figtree_300Light,
  Figtree_300Light_Italic,
  Figtree_400Regular,
  Figtree_400Regular_Italic,
  Figtree_500Medium_Italic,
  Figtree_500Medium,
  Figtree_600SemiBold,
  Figtree_600SemiBold_Italic,
  Figtree_700Bold,
  Figtree_700Bold_Italic,
  Figtree_800ExtraBold,
  Figtree_800ExtraBold_Italic,
  Figtree_900Black,
  Figtree_900Black_Italic,
} from "@expo-google-fonts/figtree";

import type { Session } from "@supabase/supabase-js";
import { supabaseConfig } from "./lib/supabaseConfig";
import { store } from "./redux/app/store";
import { Auth } from "./components";
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
  const [userSession, setUserSession] = useState<Session | null>(null);
  useEffect(() => {
    supabaseConfig.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
    });

    supabaseConfig.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
    });
  }, []);

  const [fontsLoaded] = useFonts({
    Figtree_300Light,
    Figtree_300Light_Italic,
    Figtree_400Regular,
    Figtree_400Regular_Italic,
    Figtree_500Medium_Italic,
    Figtree_500Medium,
    Figtree_600SemiBold,
    Figtree_600SemiBold_Italic,
    Figtree_700Bold,
    Figtree_700Bold_Italic,
    Figtree_800ExtraBold,
    Figtree_800ExtraBold_Italic,
    Figtree_900Black,
    Figtree_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {userSession && userSession?.user ? (
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
      ) : (
        <Auth />
      )}
    </Provider>
  );
};

export default App;
