import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useAddStudentFormContext } from "@src/contexts/AddStudentFormContext";
import { useNewModalState } from "@src/hooks";
import { ModalScrollable } from "@src/components";
import ExistingFamilyOptions from "./ExistingFamilyOptions";

// eslint-disable-next-line import/order
import globalStyles from "@src/globalStyles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

const ExistingFamilyChoice = () => {
  const { styles } = useAddStudentFormContext();
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
          style={styles.chooseFamilyButtonTouchable}
          onPress={openOrCloseModal}
        >
          <Text style={styles.chooseFamilyButtonText}>Choose Family</Text>
        </TouchableOpacity>
      </LinearGradient>
      <ModalScrollable
        modalVisible={modalVisiable}
        openOrCloseModal={openOrCloseModal}
      >
        <ExistingFamilyOptions openOrCloseModal={openOrCloseModal} />
      </ModalScrollable>
    </View>
  );
};

export default ExistingFamilyChoice;
