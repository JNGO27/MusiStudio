import { View, Text } from "react-native";
import { Image } from "expo-image";

import { useAppSelector } from "@src/redux";
import { getUserEmail, getUserAvatarUrl } from "@src/redux/selectors";

import { useResponsiveness } from "@src/hooks";
import { BackButtonCustom } from "@src/components";

import { LockIcon, MusicNote } from "@src/assets/icons";

import createStyleSheet from "./styles";

const AccountInformation = () => {
  const userEmail = useAppSelector(getUserEmail);
  const userAvatarUrl = useAppSelector(getUserAvatarUrl);

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
        <View style={styles.profileContainer}>
          {userAvatarUrl ? (
            <Image source={userAvatarUrl} style={styles.accountIconOrPicture} />
          ) : (
            <MusicNote style={styles.accountIconOrPicture} color="white" />
          )}
        </View>
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
