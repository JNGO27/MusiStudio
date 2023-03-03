import { SafeAreaView, View } from "react-native";

import { HomeOption, Account } from "../components";
import { HomeOptionsArr } from "../utils/constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="pt-12 w-full h-full">
      <View className="flex flex-row justify-center items-center flex-wrap">
        {HomeOptionsArr.map(({ title }) => (
          <HomeOption key={title} title={title} />
        ))}
      </View>
      <Account />
    </SafeAreaView>
  );
};

export default HomeScreen;
