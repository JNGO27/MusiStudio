import { TouchableOpacity, Text } from "react-native";
import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  text: string;
  onPress: () => void;
  isChosen: boolean;
};

const CheckboxCard = ({ text, onPress, isChosen }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    isChosen,
  );
  return (
    <TouchableOpacity style={styles.checkboxCard} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CheckboxCard;
