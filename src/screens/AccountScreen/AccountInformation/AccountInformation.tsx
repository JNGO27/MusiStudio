import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { supabaseConfig } from "@src/lib/supabaseConfig";

import { useAppSelector } from "@src/redux";
import { getUserEmail, getUserAvatarUrl } from "@src/redux/selectors";

import { useResponsiveness, useNewModalState } from "@src/hooks";
import { BackButtonCustom, CriticalModal } from "@src/components";

import { LockIcon, MusicNote } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";

import createStyleSheet from "./styles";

const {
  colors: { purples },
} = globalStyles;

const AccountInformation = () => {
  const [modalVisible, openOrCloseModal] = useNewModalState();
  const userEmail = useAppSelector(getUserEmail);
  const userAvatarUrl = useAppSelector(getUserAvatarUrl);

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleSignOut = async () => {
    const { error } = await supabaseConfig.auth.signOut();
    if (error) throw new Error(error.message);
  };

  const handleDeleteUser = async () => {
    const { error } = await supabaseConfig.rpc("delete_user");
    if (error) throw new Error(error.message);
  };

  const handleSubmit = () => {
    handleSignOut();
    handleDeleteUser();
  };

  return (
    <View style={styles.screenContainer}>
      <BackButtonCustom />
      <Text style={styles.headlineText}>Profile</Text>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          {userAvatarUrl ? (
            <Image source={userAvatarUrl} style={styles.accountIconOrPicture} />
          ) : (
            <MusicNote
              style={styles.accountIconOrPicture}
              color={purples.purple300}
            />
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
      <TouchableOpacity
        style={styles.deleteUserButton}
        onPress={openOrCloseModal}
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <CriticalModal
        dispatchCriticalAction={handleSubmit}
        openOrCloseModal={openOrCloseModal}
        criticalHeaderText="Are you sure?"
        criticalBodyText="You are about to delete your account. This will delete your account and ALL of your data."
        criticalFinalizationText="Please type in your email shown below to confirm your decision."
        criticalActionText="Delete Account"
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default AccountInformation;
