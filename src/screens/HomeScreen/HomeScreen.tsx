import { View } from "react-native";

import { HomeOptionsArr } from "@src/utils/constants";
import { HomeOption, Account } from "@src/components";

const HomeScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 20,
      }}
    >
      {HomeOptionsArr.map(({ title }) => (
        <HomeOption key={title} title={title} />
      ))}
      <Account />
    </View>
  );
};

export default HomeScreen;
