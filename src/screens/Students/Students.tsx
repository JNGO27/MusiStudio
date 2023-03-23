import { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { supabaseConfig } from "@src/lib/supabaseConfig";

import type { Student } from "@src/types";
import { PhoneIcon, EmailSvg } from "@src/assets/icons";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
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

      setStudents(studentsData);
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardsContainer}>
        {students.map(({ id, last_name, first_name }: Student) => (
          <View style={styles.studentCard} key={id}>
            <View style={styles.studentProfileContainer}>
              <View style={styles.profileCircle}>
                <Text style={styles.initials}>
                  {last_name[0]}.{first_name[0]}
                </Text>
              </View>
              <Text style={styles.profileName}>
                {last_name}, {first_name}
              </Text>
            </View>
            <View style={styles.contactInformationContainer}>
              <View style={styles.iconContainer}>
                <PhoneIcon style={styles.phoneIcon} />
                <Text style={styles.contactInfoText}>555-555-5555</Text>
              </View>
              <View style={styles.iconContainer}>
                <EmailSvg style={styles.emailIcon} color="black" />
                <Text style={styles.contactInfoText}>fake@example.com</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Students;
