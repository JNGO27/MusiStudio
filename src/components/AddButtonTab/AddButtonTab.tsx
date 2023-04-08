import { Alert, TouchableOpacity, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const AddButtonTab = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

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
      onPress={() => Alert.alert("Working!")}
    >
      <Text style={{ color: "white" }}>+</Text>
    </TouchableOpacity>
  );
};

export default AddButtonTab;
