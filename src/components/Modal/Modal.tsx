import { Modal, TouchableOpacity, View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { useModalContext } from "@src/Contexts/ModalContext";
import createStyleSheet from "./styles";

const ModalComponent = () => {
  const { modalVisible, setModalVisible, message } = useModalContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    // horizontalScale,
    // verticalScale,
    // moderateScale,
    modalVisible,
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        animationType="slide"
        transparent
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <View style={styles.innerContainer}>
              <Text style={styles.text}>{message}</Text>
              <TouchableOpacity style={styles.button} onPress={closeModal}>
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
