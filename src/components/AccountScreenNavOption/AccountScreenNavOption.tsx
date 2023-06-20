import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { HeaderStackParamList } from "@src/types";

import { useResponsiveness } from "@src/hooks";

import createStyleSheet from "./styles";

type NewHeaderStackParamList = keyof Omit<
  HeaderStackParamList,
  "HeaderNav" | "AccountHome" | "TermsAndConditions"
>;

type Props = {
  header: string;
  screenName: NewHeaderStackParamList;
  content: string;
};

type AccountScreenNavigationProps = NativeStackNavigationProp<
  HeaderStackParamList,
  "AccountHome"
>;
const AccountScreenNavOption = ({ header, screenName, content }: Props) => {
  const navigator = useNavigation<AccountScreenNavigationProps>();

  const handleNavigation = () => {
    navigator.navigate(screenName);
  };

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <TouchableOpacity
      style={styles.settingsNavCard}
      key={header}
      onPress={handleNavigation}
    >
      <Text style={styles.cardHeaderText}>{header}</Text>
      <Text style={styles.cardSubText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default AccountScreenNavOption;
