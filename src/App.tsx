import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";

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
      <SafeAreaView style={styles.container}>
        {userSession && userSession?.user ? <RootNav /> : <AuthNav />}
      </SafeAreaView>
    </Provider>
  );
};

export default registerRootComponent(App);
