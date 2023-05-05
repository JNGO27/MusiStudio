import { View, Text } from "react-native";

import type { GestureResponderEvent } from "react-native";

import type { StyleSheetProps } from "@src/types";

import { useGetAllFamilyDataQuery } from "@src/redux/services/supabaseAPI";

type Props = {
  styles: StyleSheetProps;
};

const ExistingFamilyOptions = ({ styles }: Props) => {
  const { data } = useGetAllFamilyDataQuery({});

  return (
    <View
      style={styles.existingFamilyOptionsContainer}
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
    >
      {data &&
        data.map((parent) => (
          <View key={parent.id}>
            <Text>{parent.parent_guardian_first_name_1}</Text>
          </View>
        ))}
    </View>
  );
};

export default ExistingFamilyOptions;
