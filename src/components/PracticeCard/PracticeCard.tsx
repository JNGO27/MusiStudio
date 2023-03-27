import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const PracticeCard = () => {
  const [horizontalScale, verticalScale] = useResponsiveness();
  const styles = createStyleSheet(horizontalScale, verticalScale);

  return (
    <View style={styles.practiceCard}>
      <Text>Practice Card</Text>
    </View>
  );
};

export default PracticeCard;
