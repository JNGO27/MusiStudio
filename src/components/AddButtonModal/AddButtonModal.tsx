import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";

import type { GestureResponderEvent } from "react-native";

import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import { AddButtonTabNavOption } from "@src/components";

import createStyleSheet from "./styles";

const AddButtonModal = () => {
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
            <AddButtonTabNavOption
              screenOption="AddStudent"
              text="Add Student"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddButtonModal;
