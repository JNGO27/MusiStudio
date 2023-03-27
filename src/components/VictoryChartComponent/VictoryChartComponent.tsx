/* eslint-disable */

import { View } from "react-native";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

import useResponsiveness from "@src/hooks/useResponsiveness";
import createStyleSheet from "./styles";

const fakeData = [
  {
    day: 1,
    hours: 10,
  },
  {
    day: 2,
    hours: 6,
  },
  {
    day: 2,
    hours: 10,
  },
  {
    day: 3,
    hours: 10,
  },
  {
    day: 4,
    hours: 10,
  },
  {
    day: 5,
    hours: 8,
  },
  {
    day: 6,
    hours: 7,
  },
  {
    day: 7,
    hours: 12,
  },
];

const VictoryChartComponent = () => {
  const [
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionWidth,
    dimensionHeight,
  ] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <VictoryChart
      width={dimensionWidth / 1.125}
      height={dimensionHeight / 4.2}
      theme={VictoryTheme.grayscale}
    >
      <VictoryLine data={fakeData} width={70} height={70} x="hours" y="day" />
    </VictoryChart>
  );
};

export default VictoryChartComponent;
