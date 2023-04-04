import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useResponsiveness from "@src/hooks/useResponsiveness";

import type { CardsNavParamList, CardsNavOptions } from "@src/types";

import { ChevronRight } from "@src/assets/icons";

import createStyleSheet from "./styles";

type Props = {
  cardOption: CardsNavOptions;
};

type CardNavigationProps = NativeStackNavigationProp<
  CardsNavParamList,
  "StudentsHome"
>;

const CardNavOption = ({ cardOption }: Props) => {
  const navigator = useNavigation<CardNavigationProps>();
  const [horizontalScale, verticalScale] = useResponsiveness();
  const styles = createStyleSheet(horizontalScale, verticalScale);

  return (
    <TouchableOpacity onPress={() => navigator.navigate(cardOption)}>
      <View style={styles.moreDetailsContainer}>
        <ChevronRight style={styles.moreDetailsIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default CardNavOption;
