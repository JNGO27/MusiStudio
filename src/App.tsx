import { registerRootComponent } from "expo";
import { Provider } from "react-redux";

import { AuthProvider } from "@src/components";

import { store } from "@src/redux/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider />
    </Provider>
  );
};

export default registerRootComponent(App);
