import { TouchableOpacity, SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../../navigation/HomeNav/HomeNav";
import type { Options } from "../../types";

type Props = {
  title: Options;
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeOption = ({ title }: Props) => {
  const navigator = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      className="flex items-center justify-center rounded-full bg-gray-300 w-32 h-32"
      onPress={() => navigator.navigate(title)}
    >
      <SafeAreaView>
        <Text className="font-ft-black">{title}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default HomeOption;
