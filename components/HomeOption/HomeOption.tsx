import { TouchableOpacity, SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../../App";

type Props = {
  title: "Students" | "Calender" | "Repertoire" | "Milage" | "Billing";
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeOption = ({ title }: Props) => {
  const navigator = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigator.navigate(title)}>
      <SafeAreaView className="flex items-center justify-center rounded-full bg-gray-300 w-32 h-32">
        <Text>{title}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default HomeOption;
