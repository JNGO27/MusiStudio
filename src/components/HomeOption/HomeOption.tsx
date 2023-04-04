import { TouchableOpacity, SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList, HomeNavOptions } from "@src/types";

type Props = {
  title: HomeNavOptions;
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeOption = ({ title }: Props) => {
  const navigator = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigator.navigate(title)}>
      <SafeAreaView>
        <Text>{title}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default HomeOption;
