import { TouchableOpacity, View, Text } from "react-native";

import { optionsOnlyArr } from "../../utils/constants";

const NavigationMenu = () => {
  return (
    <View className="flex flex-row absolute bottom-0 h-12 gap-4">
      {optionsOnlyArr.map((option) => (
        <TouchableOpacity key={option}>
          <Text className="font-ft-reg">{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationMenu;
