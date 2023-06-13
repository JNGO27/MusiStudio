import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNav, AuthNav } from "@src/navigation";
import { useAuthenticateUser, useLoadFonts } from "@src/hooks";

import { appStyles } from "@src/globalStyles";

const AuthProvider = () => {
  const userSession = useAuthenticateUser();
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={appStyles.container}>
      {userSession && userSession?.user ? <RootNav /> : <AuthNav />}
    </GestureHandlerRootView>
  );
};

export default AuthProvider;
