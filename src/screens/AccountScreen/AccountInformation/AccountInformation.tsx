import { useState, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { supabaseConfig } from "@src/lib/supabaseConfig";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { BackButtonCustom } from "@src/components";

import { UserAccountIcon, LockIcon } from "@src/assets/icons";

import createStyleSheet from "./styles";

const AccountInformation = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

  useLayoutEffect(() => {
    async function getUserEmail() {
      const {
        data: { user },
      } = await supabaseConfig.auth.getUser();

      setUserEmail(user?.email);
    }

    getUserEmail();
  }, []);

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.screenContainer}>
      <BackButtonCustom />
      <Text style={styles.headlineText}>Profile</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
          <UserAccountIcon style={styles.accountIconOrPicture} />
        </TouchableOpacity>
        <Text style={styles.uploadMessage}>Tap to upload profile picture</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.emailLabelText}>Email:</Text>
          <View style={styles.userEmailContainer}>
            <Text style={styles.userEmailText}>{userEmail}</Text>
            <LockIcon style={styles.lockIcon} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountInformation;
