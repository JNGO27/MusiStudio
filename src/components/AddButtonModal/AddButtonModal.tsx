import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { GestureResponderEvent } from "react-native";

import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import useResponsiveness from "@src/hooks/useResponsiveness";

import type { AddTabParamList } from "@src/types";

import createStyleSheet from "./styles";

type ModalOptions = NativeStackNavigationProp<AddTabParamList, "AddTab">;

const AddButtonModal = () => {
  const navigator = useNavigation<ModalOptions>();
  const { modalVisible, setModalVisible } = useAddButtonModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  const openOrClose = () => {
    setModalVisible((prevVal) => !prevVal);
  };

  return (
    <Modal
      style={styles.modalContainer}
      visible={modalVisible}
      onRequestClose={openOrClose}
      animationType="slide"
      transparent
    >
      <TouchableWithoutFeedback onPress={openOrClose}>
        <View style={styles.modalBackground}>
          <View
            style={styles.modalCard}
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
          >
            <TouchableOpacity style={styles.exitButton} onPress={openOrClose}>
              <Text style={styles.exitButtonIcon}>✖</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigator.navigate("AddTab")}>
              <View style={styles.addStudentContainer}>
                <Text style={styles.addStudentText}>Add Student</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddButtonModal;
