import { Modal, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";

import { useModalContext } from "@src/contexts/ModalContext";
import useResponsiveness from "@src/hooks/useResponsiveness";

import ErrorIcon from "./error.png";
import SuccessIcon from "./success.png";
import SecurityIcon from "./security.png";

import createStyleSheet from "./styles";

const ModalComponent = () => {
  const { modalVisible, setModalVisible, message } = useModalContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );
  let icon;

  if (message.includes("wrong")) {
    icon = ErrorIcon;
  } else if (message.includes("security")) {
    icon = SecurityIcon;
  } else {
    icon = SuccessIcon;
  }

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
            <Image style={styles.icon} source={icon} />
            <View style={styles.innerContainer}>
              <Text style={styles.text}>{message}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
