import { View, Text, TouchableOpacity } from "react-native";

import { supabaseConfig } from "@src/lib/supabaseConfig";

import { useResponsiveness, useNewModalState } from "@src/hooks";
import {
  BackButtonCustom,
  AccountScreenNavOption,
  WarningModal,
} from "@src/components";

import { HeaderNavOptionsOnlyArr } from "@src/utils/constants";

import createStyleSheet from "./styles";

const AccountHome = () => {
  const [modalVisible, openOrCloseModal] = useNewModalState();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleSignOut = async () => {
    const { error } = await supabaseConfig.auth.signOut();
    if (error) return null;

    return null;
  };

  return (
    <View style={styles.screenContainer}>
      <BackButtonCustom />
      <Text style={styles.headlineText}>Settings / Account</Text>
      <View style={styles.settingsCardsContainer}>
        {HeaderNavOptionsOnlyArr.map(({ header, screenName, content }) => (
          <AccountScreenNavOption
            key={header}
            header={header}
            screenName={screenName}
            content={content}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.logOutButton} onPress={openOrCloseModal}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <WarningModal
        warningHeaderText="Are you sure?"
        warningBodyText="Logging out will restrict data to your account. You will need to log back in to access your data."
        warningActionText="Log Out"
        modalVisible={modalVisible}
        openOrCloseModal={openOrCloseModal}
        dispatchWarningAction={handleSignOut}
      />
    </View>
  );
};

export default AccountHome;
