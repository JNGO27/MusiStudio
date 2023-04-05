import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium_Italic,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import { RootNav, AuthNav } from "@src/navigation";

import type { Session } from "@supabase/supabase-js";

import { supabaseConfig } from "@src/lib/supabaseConfig";
import { store } from "@src/redux/app/store";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

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
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium_Italic,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {userSession && userSession?.user ? <RootNav /> : <AuthNav />}
      </SafeAreaView>
    </Provider>
  );
};

export default registerRootComponent(App);
