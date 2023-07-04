import type { ConfigContext } from "@expo/config";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";

const expoConfig = ({ config }: ConfigContext) => ({
  ...config,
  name: "MusiStudio",
  slug: "musistudio",
  scheme: "musistudio",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/splash/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/splash/splash.png",
    resizeMode: "cover",
    backgroundColor: "#584abf",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.jngo27.musistudio",
    versionCode: 1,
  },
  web: {
    favicon: "./src/assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "4554bb24-6fed-4647-ab29-99da32903180",
      SUPABASE_URL,
      SUPABASE_KEY,
    },
  },
  owner: "jngo27",
});

export default expoConfig;
