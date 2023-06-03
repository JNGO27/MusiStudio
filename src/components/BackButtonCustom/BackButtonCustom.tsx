import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const BackButtonCustom = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View>
      <Text>BackButtonCustom</Text>
    </View>
  );
};

export default BackButtonCustom;
