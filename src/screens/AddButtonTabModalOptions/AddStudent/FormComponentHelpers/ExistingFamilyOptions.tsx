import { View, Text } from "react-native";

import type { GestureResponderEvent } from "react-native";

import type { StyleSheetProps } from "@src/types";

type Props = {
  styles: StyleSheetProps;
};

const ExistingFamilyOptions = ({ styles }: Props) => {
  return (
    <View
      style={styles.existingFamilyOptionsContainer}
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
    >
      <Text>ExistingFamilyOptions</Text>
    </View>
  );
};

export default ExistingFamilyOptions;
