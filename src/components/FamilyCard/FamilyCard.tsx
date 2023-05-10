import { memo } from "react";
import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { CardNavOption } from "@src/components";

import type { FamilyCardType } from "@src/types";

import { PhoneSvg, EmailSvg } from "@src/assets/icons";

import createStyleSheet from "./styles";

type Props = {
  first_name: FamilyCardType["parent_guardian_first_name_1"];
  last_name: FamilyCardType["parent_guardian_last_name_1"];
  phone_number: FamilyCardType["phone_number"];
  email_address: FamilyCardType["email_address"];
};

const FamilyCard = ({
  first_name,
  last_name,
  phone_number,
  email_address,
}: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.familyCard}>
      <View style={styles.parentContainer}>
        <View style={styles.familyDetailsContainer}>
          <View style={styles.familyProfileContainer}>
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
        <CardNavOption cardOption="FamilyCardDetails" />
      </View>
    </View>
  );
};

export default memo(FamilyCard);
