import { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";

import type { Session } from "@supabase/supabase-js";

import { supabaseConfig } from "@src/lib/supabaseConfig";

const useAuthenticateUser = () => {
  const [userSession, setUserSession] = useState<Session | null>(null);

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

  return userSession;
};

export default useAuthenticateUser;
