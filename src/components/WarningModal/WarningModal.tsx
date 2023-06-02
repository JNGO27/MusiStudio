/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View } from "react-native";

import type { Dispatch, SetStateAction } from "react";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

type Props = {
  isVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const WarningModal = ({ isVisible, setModalVisible }: Props) => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View>
      <Text>WarningModal</Text>
    </View>
  );
};

export default WarningModal;
