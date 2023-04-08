import { Modal, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";

import { useAuthModalContext } from "@src/contexts/AuthModalContext";
import useResponsiveness from "@src/hooks/useResponsiveness";

import { ErrorIcon, SuccessIcon, SecurityIcon } from "@src/assets/icons";

import createStyleSheet from "./styles";

const AuthModal = () => {
  const { modalVisible, setModalVisible, message } = useAuthModalContext();
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

export default AuthModal;
