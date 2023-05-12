import { StatusBar, View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { AccountNavOption } from "@src/components";

import createStyleSheet from "./styles";

const Header = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
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

export default Header;
