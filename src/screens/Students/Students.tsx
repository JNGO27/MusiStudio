import { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import uuid from "react-native-uuid";

import { supabaseConfig } from "@src/lib/supabaseConfig";
import type { StudentAndFamily } from "@src/types";
import { StudentCard, FamilyCard, DataCardsContainer } from "@src/components";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const Students = () => {
  const [allData, setAllData] = useState<StudentAndFamily[]>([]);
  const [horizontalScale] = useResponsiveness();
  const styles = createStyleSheet(horizontalScale);

  useEffect(() => {
    async function getData() {
      const { data: allStudentsData } = await supabaseConfig
        .from("Students")
        .select(
          "id, first_name, last_name, phone_number, email_address, associated_family (parent_guardian_first_name_1, parent_guardian_last_name_1, phone_number, email_address)",
        );

      if (allStudentsData) {
        setAllData(allStudentsData);
      }
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.cardsContainer}
        contentContainerStyle={styles.cardsContainerFlex}
        data={allData}
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
            ]}
          />
        )}
        keyExtractor={() => uuid.v4().toString()}
      />
    </SafeAreaView>
  );
};

export default Students;
