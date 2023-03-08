import { TouchableOpacity, View, Text } from "react-native";

import { HomeOptionsOnlyArr } from "@src/utils/constants";

const NavigationMenu = () => {
  return (
    <View>
      {HomeOptionsOnlyArr.map((option) => (
        <TouchableOpacity key={option}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationMenu;
