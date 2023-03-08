import { View } from "react-native";

import { HomeOption, Account } from "@src/components";
import { HomeOptionsArr } from "@src/utils/constants";

const HomeScreen = () => {
  return (
    <View>
      {HomeOptionsArr.map(({ title }) => (
        <HomeOption key={title} title={title} />
      ))}
      <Account />
    </View>
  );
};

export default HomeScreen;
