import { View, Text } from "react-native";

import { useUnFocusedScreenToParent } from "@src/hooks";

const PracticeCardDetails = () => {
  useUnFocusedScreenToParent();

  return (
    <View>
      <Text>PracticeCardDetails</Text>
    </View>
  );
};

export default PracticeCardDetails;
