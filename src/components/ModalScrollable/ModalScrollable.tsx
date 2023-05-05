import {
  ScrollView,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import type { GestureResponderEvent } from "react-native";

import type { ReactNode } from "react";

import { useResponsiveness } from "@src/hooks";
import createStyleSheet from "./styles";

type Props = {
  modalVisible: boolean;
  openOrCloseModal: () => void;
  children: ReactNode;
};

const ModalScrollable = ({
  modalVisible,
  openOrCloseModal,
  children,
}: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        onRequestClose={openOrCloseModal}
        animationType="slide"
      >
        <TouchableWithoutFeedback
          style={styles.modalTouchableBackground}
          onPress={openOrCloseModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView
              style={styles.scrollableModalContainer}
              contentContainerStyle={
                styles.scrollableModalContainerContentContainer
              }
              onStartShouldSetResponder={() => true}
              onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
            >
              {children}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ModalScrollable;
