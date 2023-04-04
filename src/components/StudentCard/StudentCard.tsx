import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";

import type { StudentCardType } from "@src/types";

import { PhoneSvg, EmailSvg } from "@src/assets/icons";

import createStyleSheet from "./styles";

const StudentCard = ({
  first_name,
  last_name,
  phone_number,
  email_address,
}: StudentCardType) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.studentCard}>
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
          <Text style={styles.contactInfoText}>{phone_number}</Text>
        </View>
        <View style={styles.iconContainer}>
          <EmailSvg style={styles.emailIcon} color="black" />
          <Text style={styles.contactInfoText}>{email_address}</Text>
        </View>
      </View>
    </View>
  );
};

export default StudentCard;
