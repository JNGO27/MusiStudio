import { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { supabaseConfig } from "@src/lib/supabaseConfig";

import type { StudentCardType } from "@src/types";
import { StudentCard } from "@src/components";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const Students = () => {
  const [students, setStudents] = useState<StudentCardType[]>([]);
  const [horizontalScale] = useResponsiveness();
  const styles = createStyleSheet(horizontalScale);

  useEffect(() => {
    async function getData() {
      const { data: studentsData } = await supabaseConfig
        .from("Students")
        .select("id, first_name, last_name, phone_number, email_address");

      setStudents(studentsData);
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.cardsContainer}
        contentContainerStyle={styles.cardsContainerFlex}
        data={students}
        renderItem={({ item }) => (
          <StudentCard
            first_name={item.first_name}
            last_name={item.last_name}
            phone_number={item.phone_number}
            email_address={item.email_address}
          />
        )}
        keyExtractor={(item) => item.id?.toString() as string}
      />
    </SafeAreaView>
  );
};

export default Students;
