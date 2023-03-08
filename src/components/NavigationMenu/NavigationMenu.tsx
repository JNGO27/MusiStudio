import { TouchableOpacity, View, Text } from "react-native";

import { optionsOnlyArr } from "@utils/constants";

const NavigationMenu = () => {
  return (
    <View>
      {optionsOnlyArr.map((option) => (
        <TouchableOpacity key={option}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationMenu;
