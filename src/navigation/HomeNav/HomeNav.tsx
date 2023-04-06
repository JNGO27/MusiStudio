import { View } from "react-native";

import { Account } from "@src/components";

const HomeNav = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Account />
    </View>
  );
};

export default HomeNav;
