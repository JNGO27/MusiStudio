import { Modal, TouchableOpacity, View, Text } from "react-native";

import { useResponsiveness, useNewModalState } from "@src/hooks";

import createStyleSheet from "./styles";

const CallOrMessageModal = () => {
  const [modalVisible, openOrCloseModal] = useNewModalState();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  return (
    <View style={styles.modalContainer}>
      <Modal
        visible={modalVisible}
        onRequestClose={openOrCloseModal}
        animationType="slide"
        transparent
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <View style={styles.innerContainer}>
              <Text>Example</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={openOrCloseModal}>
              <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CallOrMessageModal;
