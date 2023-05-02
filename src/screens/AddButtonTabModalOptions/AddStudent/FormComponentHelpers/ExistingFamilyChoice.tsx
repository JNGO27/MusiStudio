import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheetProps } from "@src/types";

import globalStyles from "@src/globalStyles";

type Props = {
  styles: StyleSheetProps;
};

const {
  colors: {
    gradients: { pinkGradient },
  },
} = globalStyles;

const ExistingFamilyChoice = ({ styles }: Props) => {
  return (
    <View style={styles.existingFamilyContainer}>
      <LinearGradient
        colors={pinkGradient.colors}
        locations={pinkGradient.locations}
        style={styles.chooseFamilyButton}
        start={pinkGradient.start}
        end={pinkGradient.end}
      >
        <TouchableOpacity style={styles.magicLinkTouchable}>
          <Text style={styles.chooseFamilyButtonText}>ChooseFamily</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ExistingFamilyChoice;
