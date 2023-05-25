/* eslint-disable import/order */
import { View } from "react-native";

import { useResponsiveness } from "@src/hooks";
import { Accordian } from "@src/components";
import StudentDetails from "./StudentDetails";

import createAccordianStyles from "./accordianStyles";
import globalStyles from "@src/globalStyles";

const { spacing } = globalStyles;

const AdditionalStudentDetails = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();

  const accordianStyles = createAccordianStyles(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View>
      <Accordian
        unOpenedText="Hide additional details"
        openedText="Show additional details"
        openedAnimatedHeight={verticalScale(spacing.multipleXL * 16)}
        styleSheet={accordianStyles}
        icon="+"
      >
        <StudentDetails />
      </Accordian>
    </View>
  );
};

export default AdditionalStudentDetails;
