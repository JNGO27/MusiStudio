import { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";

import type { Session } from "@supabase/supabase-js";

import { useAppDispatch } from "@src/redux";

import { supabaseApi } from "@src/redux/services/supabaseAPI";
import { supabaseConfig } from "@src/lib/supabaseConfig";

const useAuthenticateUser = () => {
  const dispatch = useAppDispatch();
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

    supabaseConfig.auth.onAuthStateChange((event, session) => {
      setUserSession(session);

      if (event === "SIGNED_OUT") {
        dispatch(supabaseApi.util.resetApiState());
      }
    });
  }, [dispatch]);

  return userSession;
};

export default useAuthenticateUser;
