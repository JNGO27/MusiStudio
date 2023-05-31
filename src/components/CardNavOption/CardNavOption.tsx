import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@src/redux";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { setCurrentStudentFamilyData } from "@src/redux/features/cardsData";

import useResponsiveness from "@src/hooks/useResponsiveness";

import type {
  CardsNavParamList,
  CardsNavOptions,
  AllStudentFamilyDataCard,
} from "@src/types";

import { ChevronRight } from "@src/assets/icons";

import createStyleSheet from "./styles";

type Props = {
  cardOption: CardsNavOptions;
  currentAllData: AllStudentFamilyDataCard;
};

type CardNavigationProps = NativeStackNavigationProp<
  CardsNavParamList,
  "StudentsHome"
>;

const CardNavOption = ({ cardOption, currentAllData }: Props) => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation<CardNavigationProps>();
  const [horizontalScale, verticalScale] = useResponsiveness();
  const styles = createStyleSheet(horizontalScale, verticalScale);

  const handleCardDetailsData = () => {
    switch (cardOption) {
      case "StudentCardDetails":
        dispatch(setCurrentStudentFamilyData(currentAllData));
        break;
      default:
        throw new Error("Must be a valid card option.");
    }
  };

  const handleOnPress = () => {
    handleCardDetailsData();
    navigator.navigate(cardOption);
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.moreDetailsContainer}>
        <ChevronRight style={styles.moreDetailsIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default CardNavOption;
