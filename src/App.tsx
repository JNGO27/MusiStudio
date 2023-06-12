import { StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNav, AuthNav } from "@src/navigation";
import { useAuthenticateUser, useLoadFonts } from "@src/hooks";

import { store } from "@src/redux/app/store";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

const App = () => {
  const userSession = useAuthenticateUser();
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        {userSession && userSession?.user ? <RootNav /> : <AuthNav />}
      </GestureHandlerRootView>
    </Provider>
  );
};

export default registerRootComponent(App);
