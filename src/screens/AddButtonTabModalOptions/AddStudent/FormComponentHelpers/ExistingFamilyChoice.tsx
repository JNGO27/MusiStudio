import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheetProps } from "@src/types";

import { useNewModalState } from "@src/hooks";
import { ModalScrollable } from "@src/components";

import globalStyles from "@src/globalStyles";

type Props = {
  styles: StyleSheetProps;
};

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const ExistingFamilyChoice = ({ styles }: Props) => {
  const [modalVisiable, openOrCloseModal] = useNewModalState();

  return (
    <View style={styles.existingFamilyContainer}>
      <LinearGradient
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        style={styles.chooseFamilyButton}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <TouchableOpacity
          style={styles.magicLinkTouchable}
          onPress={openOrCloseModal}
        >
          <Text style={styles.chooseFamilyButtonText}>ChooseFamily</Text>
        </TouchableOpacity>
      </LinearGradient>
      <ModalScrollable
        modalVisible={modalVisiable}
        openOrCloseModal={openOrCloseModal}
      >
        <Text>Some Text</Text>
      </ModalScrollable>
    </View>
  );
};

export default ExistingFamilyChoice;
