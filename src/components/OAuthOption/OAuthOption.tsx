import { Text, View, TouchableOpacity } from "react-native";
import type { Provider } from "@supabase/supabase-js";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";

import { supabaseConfig } from "@src/lib/supabaseConfig";
import { SUPABASE_URL } from "@env";
import useResponsiveness from "@src/hooks/useResponsiveness";
import { GoogleSvg } from "@src/assets/icons";
import { capitalize, getTokens } from "./helpers";
import createStyleSheet from "./styles";

type Props = {
  provider: Provider;
};

const OAuthOption = ({ provider }: Props) => {
  const deepLinkSupaBaseUrl = Linking.createURL(SUPABASE_URL);
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const providerCapitalized = capitalize(provider);

  const redirectUri = makeRedirectUri({
    path: deepLinkSupaBaseUrl,
  });

  const signInWithProvider = async () => {
    const { data } = await supabaseConfig.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: redirectUri,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    Linking.openURL(data.url as string);

    Linking.addEventListener("url", (event) => {
      const { url } = event;
      const [accessToken, refreshToken] = getTokens(url);

      supabaseConfig.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    });
  };

  return (
    <TouchableOpacity onPress={signInWithProvider} style={styles.container}>
      <View style={styles.optionContainer}>
        <GoogleSvg style={styles.icon} />
        <Text style={styles.optionText}>
          Continue with {providerCapitalized}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OAuthOption;
