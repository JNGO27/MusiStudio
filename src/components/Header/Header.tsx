import { memo } from "react";
import { StatusBar, View, Text } from "react-native";

import { useResponsiveness, useIsNestedScreen } from "@src/hooks";
import { AccountNavOption } from "@src/components";

import createStyleSheet from "./styles";

const Header = () => {
  const isNestedScreen = useIsNestedScreen();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    isNestedScreen,
  );

  return (
    <>
      <StatusBar />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ProtegeCoreSuite</Text>
        <AccountNavOption />
      </View>
    </>
  );
};

export default memo(Header);
