import { ScrollView, View, Modal } from "react-native";

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
        <View style={styles.modalContainer}>
          <ScrollView
            style={styles.scrollableModalContainer}
            contentContainerStyle={
              styles.scrollableModalContainerContentContainer
            }
          >
            {children}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScrollable;
