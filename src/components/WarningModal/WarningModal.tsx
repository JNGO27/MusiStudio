/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";

import type { FunctionType } from "@src/types";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { WarningIcon } from "@src/assets/icons";

import createStyleSheet from "./styles";

type Props = {
  dispatchWarningAction: FunctionType;
  warningHeaderText: string;
  warningBodyText: string;
  warningActionText: string;
  modalVisible: boolean;
  openOrCloseModal: () => void;
};

const WarningModal = ({
  dispatchWarningAction,
  warningHeaderText,
  warningBodyText,
  warningActionText,
  modalVisible,
  openOrCloseModal,
}: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

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
              <Image style={styles.icon} source={WarningIcon} />
              <View style={styles.optionsContainer}>
                <Text style={styles.headerText}>{warningHeaderText}</Text>
                <Text style={styles.bodyText}>{warningBodyText}</Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.buttonWarningAction}
                onPress={dispatchWarningAction}
              >
                <Text style={styles.buttonText}>{warningActionText}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={openOrCloseModal}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default WarningModal;
