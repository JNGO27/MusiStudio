import { View, Text } from "react-native";

import { useUnFocusedScreenToParent } from "@src/hooks";

const StudentCardDetails = () => {
  useUnFocusedScreenToParent();

  return (
    <View>
      <Text>StudentCardDetails</Text>
    </View>
  );
};

export default StudentCardDetails;
