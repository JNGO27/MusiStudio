import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { BackButtonCustom, AccountScreenNavOption } from "@src/components";

import { HeaderNavOptionsOnlyArr } from "@src/utils/constants";

import createStyleSheet from "./styles";

const AccountHome = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

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
    </View>
  );
};

export default AccountHome;
