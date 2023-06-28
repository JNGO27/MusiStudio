import { View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { BackButtonCustom } from "@src/components";

import { APP_NAME, APP_EMAIL } from "@src/utils/constants";

import createStyleSheet from "./styles";

const About = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <View style={styles.screenContainer}>
      <BackButtonCustom />
      <Text style={styles.headlineText}>About Us</Text>
      <View style={styles.allContentContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.aboutAppTextContent}>
            {APP_NAME} aims to be an all-in-one solution to the core problems
            music teachers face. Currently, we are in beta; however, in the
            future, we plan to have more features such as scheduling and
            handling payments. So stay tuned!
          </Text>
        </View>
        <View>
          <Text style={styles.aboutCreatorHeadline}>About Creator</Text>
          <Text style={styles.aboutMeTextContent}>
            Leon Joseph Napoleon is a former music teacher who has transitioned
            into a software engineer. With his background as a music teacher,
            Leon Joseph possesses a unique understanding of the challenges faced
            by music teachers. Now, as a software engineer, he aims to create a
            custom solution for the problems experienced by music teachers,
            based on his own experiences and those of his network.
          </Text>
        </View>
        <View>
          <Text style={styles.aboutCreatorHeadline}>Contact Us</Text>
          <Text style={styles.aboutMeTextContent} selectable>
            {APP_EMAIL}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default About;
