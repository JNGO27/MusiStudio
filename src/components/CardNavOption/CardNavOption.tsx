import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { CardsNavParamList, CardsNavOptions } from "@src/types";

type Props = {
  cardOption: CardsNavOptions;
};

type CardNavigationProps = NativeStackNavigationProp<
  CardsNavParamList,
  "Students"
>;

const CardNavOption = ({ cardOption }: Props) => {
  const navigator = useNavigation<CardNavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigator.navigate(cardOption)}>
      <Text>Example</Text>
    </TouchableOpacity>
  );
};

export default CardNavOption;
