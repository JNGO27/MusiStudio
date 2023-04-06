import { View, Text } from "react-native";

import { useUnFocusedScreenToParent } from "@src/hooks";

const FamilyCardDetails = () => {
  useUnFocusedScreenToParent();

  return (
    <View>
      <Text>FamilyCardDetails</Text>
    </View>
  );
};

export default FamilyCardDetails;
