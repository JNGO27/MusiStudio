import { Text, View, TouchableOpacity, Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

import type { Provider } from "@supabase/supabase-js";
import type {
  WebBrowserRedirectResult,
  WebBrowserAuthSessionResult,
} from "expo-web-browser";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { GoogleSvg } from "@src/assets/icons";
import { supabaseConfig } from "@src/lib/supabaseConfig";

import { useSetSession } from "@src/hooks";

import createStyleSheet from "./styles";

import { capitalize, getTokens } from "./helpers";

type Props = {
  provider: Provider;
};

type WebResult = WebBrowserAuthSessionResult | WebBrowserRedirectResult;

WebBrowser.maybeCompleteAuthSession();

const OAuthOption = ({ provider }: Props) => {
  const [redirectUri] = useSetSession();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const providerCapitalized = capitalize(provider);

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

    if (Platform.OS === "ios") {
      const result: WebResult = await WebBrowser.openAuthSessionAsync(
        data.url as string,
      );

      WebBrowser.dismissBrowser();

      if (result.type === "success") {
        const [accessToken, refreshToken] = getTokens(result.url);

        supabaseConfig.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
      }
    }

    if (Platform.OS === "android") {
      const result = await WebBrowser.openBrowserAsync(data.url as string);

      Linking.addEventListener("url", (event) => {
        const { url } = event;

        if (result.type === "opened") {
          const [accessToken, refreshToken] = getTokens(url);

          supabaseConfig.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
        }
      });
    }
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
