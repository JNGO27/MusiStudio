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

import createStyleSheet from "./styles";

const AddButtonModal = () => {
  const { modalVisible, setModalVisible } = useAddButtonModalContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      style={styles.modalContainer}
      visible={modalVisible}
      onRequestClose={closeModal}
      animationType="slide"
      transparent
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <View
            style={styles.modalCard}
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
          >
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddButtonModal;
