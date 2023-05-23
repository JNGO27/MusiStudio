import { useEffect } from "react";
import * as Linking from "expo-linking";
import { makeRedirectUri } from "expo-auth-session";

import { supabaseConfig } from "@src/lib/supabaseConfig";
import { getTokens } from "@src/utils/linkHelpers";

const useSetSession = () => {
  const mostRecentURL = Linking.useURL();
  const desiredScreenUrl = "auth/home";
  const resetPasswordFormURLScreen = Linking.createURL(desiredScreenUrl);
  const redirectUri = makeRedirectUri({
    path: resetPasswordFormURLScreen,
  });

  useEffect(() => {
    let accessToken: string;
    let refreshToken: string;
    let haveTokens = false;

    if (mostRecentURL !== null && !haveTokens) {
      [accessToken, refreshToken] = getTokens(mostRecentURL);
      haveTokens = true;

      supabaseConfig.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
  }, [mostRecentURL]);

  return [redirectUri];
};

export default useSetSession;
