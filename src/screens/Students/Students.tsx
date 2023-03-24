import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
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
        .select("id, first_name, last_name, phone_number, email_address");

      setStudents(studentsData);
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.cardsContainer}
        contentContainerStyle={styles.cardsContainerFlex}
      >
        {students.map(
          ({
            id,
            last_name,
            first_name,
            email_address,
            phone_number,
          }: Student) => (
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
                  <Text style={styles.contactInfoText}>{phone_number}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <EmailSvg style={styles.emailIcon} color="black" />
                  <Text style={styles.contactInfoText}>{email_address}</Text>
                </View>
              </View>
            </View>
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Students;
