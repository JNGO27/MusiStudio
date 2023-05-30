import { useState } from "react";
import { View, Text } from "react-native";

import type { GestureResponderEvent } from "react-native";

import { useEditStudentFormContext } from "@src/contexts/EditStudentFormContext";
import { CheckboxFamilyCard } from "@src/components";

import { useGetAllFamilyDataQuery } from "@src/redux/services/supabaseAPI";

type Props = {
  openOrCloseModal: () => void;
};

const ExistingFamilyOptions = ({ openOrCloseModal }: Props) => {
  const { data, isLoading } = useGetAllFamilyDataQuery({});
  const { setFieldValue, setChosenExistingFamily, styles } =
    useEditStudentFormContext();
  const [, setSelectedCard] = useState<number | null>(null);
  const [isChosen, setIsChosen] = useState<{ [key: number]: boolean }>({});

  const handleCardPress = (id: number, lastName: string, firstName: string) => {
    setSelectedCard(id);
    setFieldValue("existing_family_id", String(id));
    setChosenExistingFamily(`${lastName}, ${firstName}`);
    setIsChosen({ [id]: true });

    setTimeout(() => {
      openOrCloseModal();
    }, 150);
  };

  if (isLoading) {
    return (
      <View style={styles.existingFamilyOptionsContainer}>
        <View style={styles.existingFamilyCardsContainer}>
          <Text>...Loading</Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={styles.existingFamilyOptionsContainer}
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
    >
      {data ? (
        data.map((parent) => (
          <View key={parent.id} style={styles.existingFamilyCardsContainer}>
            <CheckboxFamilyCard
              isChosen={isChosen[parent.id]}
              onPress={() =>
                handleCardPress(
                  parent.id,
                  parent.parent_guardian_last_name_1,
                  parent.parent_guardian_first_name_1,
                )
              }
            >
              <Text style={styles.existingFamilyParentOne}>
                {parent.parent_guardian_last_name_1}
                {", "}
                {parent.parent_guardian_first_name_1}
              </Text>
            </CheckboxFamilyCard>
          </View>
        ))
      ) : (
        <Text>No Available Families</Text>
      )}
    </View>
  );
};

export default ExistingFamilyOptions;
