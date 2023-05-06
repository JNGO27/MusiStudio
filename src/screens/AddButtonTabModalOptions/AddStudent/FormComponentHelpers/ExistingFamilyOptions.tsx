import { useState } from "react";
import { View, Text } from "react-native";

import type { GestureResponderEvent } from "react-native";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import { CheckboxFamilyCard } from "@src/components";

import { useGetAllFamilyDataQuery } from "@src/redux/services/supabaseAPI";

type Props = {
  openOrCloseModal: () => void;
};

const ExistingFamilyOptions = ({ openOrCloseModal }: Props) => {
  const { setFieldValue, styles } = useAddStudentFormContext();
  const [, setSelectedCard] = useState<number | null>(null);
  const [isChosen, setIsChosen] = useState<{ [key: number]: boolean }>({});
  const { data } = useGetAllFamilyDataQuery({});

  const handleCardPress = (id: number) => {
    setSelectedCard(id);
    setFieldValue("existing_family_id", String(id));
    setIsChosen({ [id]: true });

    setTimeout(() => {
      openOrCloseModal();
    }, 150);
  };
  return (
    <View
      style={styles.existingFamilyOptionsContainer}
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
    >
      {data &&
        data.map((parent) => (
          <View key={parent.id} style={styles.existingFamilyCardsContainer}>
            <CheckboxFamilyCard
              isChosen={isChosen[parent.id]}
              onPress={() => handleCardPress(parent.id)}
            >
              <Text style={styles.existingFamilyParentOne}>
                {parent.parent_guardian_last_name_1},{" "}
                {parent.parent_guardian_first_name_1}
              </Text>
            </CheckboxFamilyCard>
          </View>
        ))}
    </View>
  );
};

export default ExistingFamilyOptions;
