import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  Linking,
} from "react-native";

import { useCallOrMessageContext } from "@src/contexts/CallOrMessageContext";
import { useResponsiveness } from "@src/hooks";
import { CheckboxCard } from "@src/components";

import createStyleSheet from "./styles";

const CallOrMessageModal = () => {
  const { modalVisible, openOrCloseModal, setOptionType, phoneNumber } =
    useCallOrMessageContext();

  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  const handleCall = () => {
    setOptionType("Call");
    openOrCloseModal();
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleMessage = () => {
    setOptionType("Message");
    openOrCloseModal();
    Linking.openURL(`sms:${phoneNumber}`);
  };

  return (
    <Modal
      style={styles.modalContainer}
      visible={modalVisible}
      onRequestClose={openOrCloseModal}
      animationType="slide"
      transparent
    >
      <TouchableWithoutFeedback onPress={openOrCloseModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <View style={styles.innerContainer}>
              <Text style={styles.text}>Select an option</Text>
              <View style={styles.optionsContainer}>
                <CheckboxCard isChosen={false} onPress={handleCall}>
                  <Text>Call</Text>
                </CheckboxCard>
                <CheckboxCard isChosen={false} onPress={handleMessage}>
                  <Text>Message</Text>
                </CheckboxCard>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={openOrCloseModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CallOrMessageModal;
