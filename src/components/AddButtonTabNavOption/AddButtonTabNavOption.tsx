import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useResponsiveness from "@src/hooks/useResponsiveness";

import type { AddTabParamList, AddTabOptions } from "@src/types";

import createStyleSheet from "./styles";

type ModalOptions = NativeStackNavigationProp<AddTabParamList, "AddTab">;

type Props = {
  screenOption: AddTabOptions;
};

const AddButtonTabNavOption = ({ screenOption }: Props) => {
  const navigator = useNavigation<ModalOptions>();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <TouchableOpacity
      onPress={() =>
        navigator.navigate("AddTab", {
          screen: screenOption,
        })
      }
    >
      <View style={styles.addStudentContainer}>
        <Text style={styles.addStudentText}>Add Student</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButtonTabNavOption;
