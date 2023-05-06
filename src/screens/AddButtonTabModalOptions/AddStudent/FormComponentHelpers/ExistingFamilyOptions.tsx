import { useState } from "react";
import { View, Text } from "react-native";

import type { GestureResponderEvent } from "react-native";

import type { StyleSheetProps } from "@src/types";

import { CheckboxCard } from "@src/components";

import { useGetAllFamilyDataQuery } from "@src/redux/services/supabaseAPI";

type Props = {
  styles: StyleSheetProps;
};

const ExistingFamilyOptions = ({ styles }: Props) => {
  const [, setSelectedCard] = useState<number | null>(null);
  const [isChosen, setIsChosen] = useState<{ [key: number]: boolean }>({});
  const { data } = useGetAllFamilyDataQuery({});

  const handleCardPress = (id: number) => {
    setSelectedCard(id);
    setIsChosen({ [id]: true });
  };
  return (
    <View
      style={styles.existingFamilyOptionsContainer}
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
    >
      {data &&
        data.map((parent) => (
          <View key={parent.id}>
            <CheckboxCard
              isChosen={isChosen[parent.id]}
              onPress={() => handleCardPress(parent.id)}
            >
              <Text>{parent.parent_guardian_first_name_1}</Text>
            </CheckboxCard>
          </View>
        ))}
    </View>
  );
};

export default ExistingFamilyOptions;
