import { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { supabaseConfig } from "@src/lib/supabaseConfig";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  useEffect(() => {
    async function getData() {
      const { data: studentsData } = await supabaseConfig
        .from("Students")
        .select("*");

      console.log(studentsData);
      setStudents(studentsData);
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        {students.map((student) => (
          <View style={styles.studentCard} key={student.id}>
            <View style={styles.studentProfileContainer}>
              <View style={styles.profileCircle}>
                <Text style={styles.initials}>
                  {student.last_name[0]}.{student.first_name[0]}
                </Text>
              </View>
              <Text style={styles.profileName}>
                {student.last_name}, {student.first_name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Students;
