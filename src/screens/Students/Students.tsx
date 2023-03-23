import { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { supabaseConfig } from "@src/lib/supabaseConfig";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [horizontalScale, verticalScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    // moderateScale,
  );

  useEffect(() => {
    async function getData() {
      const { data: studentsData } = await supabaseConfig
        .from("Students")
        .select("*");

      setStudents(studentsData);
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        {students.map((student) => (
          <View style={styles.studentCard} key={student.id}>
            <Text>students</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Students;
