import { useState } from "react";
import { Modal, Button, Platform, View, Text } from "react-native";

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const isTransparent = Platform.OS === "ios";

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={
        modalVisible
          ? { flex: 1, justifyContent: "center", alignItems: "center" }
          : {}
      }
    >
      <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        animationType="slide"
        transparent={isTransparent}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text>This is a modal!</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
