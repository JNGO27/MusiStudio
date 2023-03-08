import { Text, TouchableOpacity, Alert } from "react-native";
import { makeRedirectUri, startAsync } from "expo-auth-session";
import type { Provider } from "@supabase/supabase-js";

import { supabaseConfig } from "@src/lib/supabaseConfig";
import { SUPABASE_URL } from "@env";

type Props = {
  provider: Provider;
};

const OAuthOption = ({ provider }: Props) => {
  const firstLetter = provider.charAt(0).toUpperCase();
  const restOfLetters = provider.slice(1);
  const providerCapitalized = firstLetter + restOfLetters;

  const signInWithProvider = async () => {
    const { error } = await supabaseConfig.auth.signInWithOAuth({
      provider,
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) Alert.alert(error.message);

    const redirectUri = makeRedirectUri({
      path: SUPABASE_URL,
    });

    const authResponse = await startAsync({
      authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
      returnUrl: redirectUri,
    });

    if (authResponse.type === "success") {
      supabaseConfig.auth.setSession({
        access_token: authResponse.params.access_token,
        refresh_token: authResponse.params.refresh_token,
      });
    }
  };

  return (
    <TouchableOpacity onPress={signInWithProvider}>
      <Text>{providerCapitalized}</Text>
    </TouchableOpacity>
  );
};

export default OAuthOption;
