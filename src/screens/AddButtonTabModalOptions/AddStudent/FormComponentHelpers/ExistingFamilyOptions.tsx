import { useState } from "react";
import { View, Text } from "react-native";

import type { GestureResponderEvent } from "react-native";

import type { StyleSheetProps } from "@src/types";

import { CheckboxFamilyCard } from "@src/components";

import { useGetAllFamilyDataQuery } from "@src/redux/services/supabaseAPI";

type Props = {
  openOrCloseModal: () => void;
  styles: StyleSheetProps;
};

const ExistingFamilyOptions = ({ openOrCloseModal, styles }: Props) => {
  const [, setSelectedCard] = useState<number | null>(null);
  const [isChosen, setIsChosen] = useState<{ [key: number]: boolean }>({});
  const { data } = useGetAllFamilyDataQuery({});

  const handleCardPress = (id: number) => {
    setSelectedCard(id);
    setIsChosen({ [id]: true });
    setTimeout(() => {
      openOrCloseModal();
    }, 200);
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
            <CheckboxFamilyCard
              isChosen={isChosen[parent.id]}
              onPress={() => handleCardPress(parent.id)}
            >
              <Text>{parent.parent_guardian_first_name_1}</Text>
            </CheckboxFamilyCard>
          </View>
        ))}
    </View>
  );
};

export default ExistingFamilyOptions;
