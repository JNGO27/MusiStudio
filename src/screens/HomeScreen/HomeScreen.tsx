import { SafeAreaView, View } from "react-native";

import { HomeOption, Account } from "../../components";
import { HomeOptionsArr } from "../../utils/constants";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        {HomeOptionsArr.map(({ title }) => (
          <HomeOption key={title} title={title} />
        ))}
      </View>
      <Account />
    </SafeAreaView>
  );
};

export default HomeScreen;
