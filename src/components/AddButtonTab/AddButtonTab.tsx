import { TouchableOpacity, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { AddButtonModal } from "@src/components";

import createStyleSheet from "./styles";

const AddButtonTab = () => {
  const { setModalVisible } = useAddButtonModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const openOrClose = () => {
    setModalVisible((prevVal) => !prevVal);
  };

  return (
    <>
      <TouchableOpacity style={styles.addButton} onPress={openOrClose}>
        <Text style={styles.addButtonIcon}>+</Text>
      </TouchableOpacity>
      <AddButtonModal />
    </>
  );
};

export default AddButtonTab;
