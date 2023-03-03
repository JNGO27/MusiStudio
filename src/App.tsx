import { registerRootComponent } from "expo";
import { useState, useEffect } from "react";
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
import { HomeNav, AuthNav } from "./navigation";

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
      {userSession && userSession?.user ? <HomeNav /> : <AuthNav />}
    </Provider>
  );
};

export default registerRootComponent(App);
