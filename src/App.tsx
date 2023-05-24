import { useState, useEffect } from "react";
import { StyleSheet, Platform } from "react-native";
import { registerRootComponent } from "expo";
import * as WebBrowser from "expo-web-browser";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNav, AuthNav } from "@src/navigation";
import { useLoadFonts } from "@src/hooks";

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
  const fontsLoaded = useLoadFonts();

  useEffect(() => {
    if (Platform.OS === "android") {
      WebBrowser.warmUpAsync();

      return () => {
        WebBrowser.coolDownAsync();
      };
    }
    return () => {};
  }, []);

  useEffect(() => {
    supabaseConfig.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
    });

    supabaseConfig.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
    });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        {userSession && userSession?.user ? <RootNav /> : <AuthNav />}
      </GestureHandlerRootView>
    </Provider>
  );
};

export default registerRootComponent(App);
