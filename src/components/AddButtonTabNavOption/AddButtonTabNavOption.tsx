import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";

import type { AddTabParamList, AddTabOptions } from "@src/types";

import createStyleSheet from "./styles";

type ModalOptions = NativeStackNavigationProp<AddTabParamList, "AddTab">;

type Props = {
  screenOption: AddTabOptions;
  text: string;
};

const AddButtonTabNavOption = ({ screenOption, text }: Props) => {
  const navigator = useNavigation<ModalOptions>();

  const { setModalVisible } = useAddButtonModalContext();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleNavigation = () => {
    navigator.navigate("AddTab", {
      screen: screenOption,
    });
  };

  const hanldeOnPress = () => {
    handleCloseModal();
    handleNavigation();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={hanldeOnPress}>
      <View style={styles.addStudentContainer} />
      <Text style={styles.addStudentText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AddButtonTabNavOption;
