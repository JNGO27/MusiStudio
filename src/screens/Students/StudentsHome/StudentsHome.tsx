import { useRef } from "react";
import { SafeAreaView, FlatList } from "react-native";
import uuid from "react-native-uuid";
import { useScrollToTop } from "@react-navigation/native";

import type { RefObject } from "react";

import {
  DataCardsContainer,
  StudentCard,
  FamilyCard,
  PracticeCard,
} from "@src/components";

import type { AllStudentFamilyDataCard } from "@src/types";

import { useGetAllStudentsDataQuery } from "@src/redux/services/supabaseAPI";

import createStyleSheet from "./styles";

type MyRef = RefObject<FlatList>;

const StudentsHome = () => {
  const ref: MyRef = useRef<FlatList>(null);

  const { data: allStudentRelatedData } = useGetAllStudentsDataQuery({});
  const styles = createStyleSheet();

  useScrollToTop(ref);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        style={styles.cardsContainer}
        contentContainerStyle={styles.cardsContainerFlex}
        data={allStudentRelatedData as AllStudentFamilyDataCard[]}
        renderItem={({ item }) => (
          <DataCardsContainer
            allStudentData={[
              <StudentCard
                key={item.id}
                first_name={item.first_name}
                last_name={item.last_name}
                phone_number={item.phone_number}
                email_address={item.email_address}
              />,
              <FamilyCard
                key={item.id}
                first_name={item.associated_family.parent_guardian_first_name_1}
                last_name={item.associated_family.parent_guardian_last_name_1}
                phone_number={item.associated_family.phone_number}
                email_address={item.associated_family.email_address}
              />,
              <PracticeCard
                key={item.id}
                minutes_practiced={item.minutes_practiced}
                days_practiced={item.days_practiced}
              />,
            ]}
          />
        )}
        keyExtractor={() => uuid.v4().toString()}
      />
    </SafeAreaView>
  );
};

export default StudentsHome;
