import { memo } from "react";
import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { CardNavOption, SelectableText } from "@src/components";

import type { StudentCardType } from "@src/types";

import { PhoneSvg, EmailSvg } from "@src/assets/icons";

import createStyleSheet from "./styles";

const StudentCard = ({
  first_name,
  last_name,
  phone_number,
  email_address,
  currentAllData,
}: StudentCardType) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.studentCard}>
      <View style={styles.parentContainer}>
        <View style={styles.studentDetailsContainer}>
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
              <PhoneSvg style={styles.phoneIcon} />
              <SelectableText content={phone_number} styles={styles} />
            </View>
            <View style={styles.iconContainer}>
              <EmailSvg style={styles.emailIcon} color="black" />
              <SelectableText content={email_address} styles={styles} />
            </View>
          </View>
        </View>
        <CardNavOption
          cardOption="StudentCardDetails"
          currentAllData={currentAllData}
        />
      </View>
    </View>
  );
};

export default memo(StudentCard);
