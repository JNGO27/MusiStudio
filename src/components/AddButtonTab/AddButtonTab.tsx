import { TouchableOpacity, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import { AddButtonModal } from "@src/components";

import createStyleSheet from "./styles";

const AddButtonTab = () => {
  const { setModalVisible } = useAddButtonModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const openOrClose = () => {
    setModalVisible((prevVal) => !prevVal);
  };

  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: "purple",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={openOrClose}
    >
      <Text style={{ color: "white" }}>+</Text>
      <AddButtonModal />
    </TouchableOpacity>
  );
};

export default AddButtonTab;
