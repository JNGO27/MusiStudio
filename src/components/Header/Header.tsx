import { StatusBar, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { HeaderStackParamList } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";

import createStyleSheet from "./styles";

type HeaderOptions = NativeStackNavigationProp<
  HeaderStackParamList,
  "HeaderNav"
>;

const Header = () => {
  const navigator = useNavigation<HeaderOptions>();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleNavigation = () => {
    navigator.navigate("HeaderNav", { screen: "Account" });
  };

  return (
    <>
      <StatusBar />
      <View
        style={{
          backgroundColor: "lightgreen",
          width: "100%",
          height: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Header component</Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
