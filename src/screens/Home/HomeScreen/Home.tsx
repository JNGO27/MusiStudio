import { LinearGradient } from "expo-linear-gradient";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { DashboardCard } from "@src/components";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { primaryMixedGradient },
  },
} = globalStyles;

const Home = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <LinearGradient
      style={styles.container}
      colors={primaryMixedGradient.colors}
      locations={primaryMixedGradient.locations}
      start={primaryMixedGradient.start}
      end={primaryMixedGradient.end}
    >
      <DashboardCard type="Students" />
    </LinearGradient>
  );
};

export default Home;
