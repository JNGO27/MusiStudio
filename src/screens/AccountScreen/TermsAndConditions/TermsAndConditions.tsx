import { ScrollView, View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { BackButtonCustom } from "@src/components";

import { APP_NAME, APP_EMAIL } from "@src/utils/constants";

import createStyleSheet from "./styles";

const TermsAndConditions = () => {
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <BackButtonCustom />
      <Text style={styles.headlineText}>Terms And Conditions</Text>
      <View style={styles.allContentContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>1. Introduction</Text>
            <Text style={styles.termsConditionsTextContent}>
              Welcome to {APP_NAME}. This is a mobile application for music
              teachers to manage their students, scheduling, and payments.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>2. User Guidelines and Rules</Text>
            <Text style={styles.termsConditionsTextContent}>
              By using this application, you agree not to misuse the application
              or help anyone else to do so. Misuse includes using the app for
              illegal purposes, attempting to probe, scan, or test the
              vulnerability of any system or network, or breach any security
              authentication measures, or attempting to access or search the
              services by any means other than the currently available published
              interfaces provided by {APP_NAME}.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>3. User Accounts</Text>
            <Text style={styles.termsConditionsTextContent}>
              You may need to create an account to use some of our services. You
              are responsible for safeguarding your account and ensuring that no
              unauthorized person has access to your account.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>4. Intellectual Property</Text>
            <Text style={styles.termsConditionsTextContent}>
              The Service and its original content, features and functionality
              are and will remain the exclusive property of {APP_NAME} and its
              licensors.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>5. Payments</Text>
            <Text style={styles.termsConditionsTextContent}>
              Any payments made within the application are governed by these
              Terms and Conditions. It is your responsibility to understand,
              agree to, and comply with these terms before proceeding with any
              payment.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>6. Changes To These Terms</Text>
            <Text style={styles.termsConditionsTextContent}>
              We may revise these terms from time to time, and will always post
              the most current version on our app. By continuing to use or
              browse the app after those revisions become effective, you agree
              to be bound by the revised terms.
            </Text>
          </View>

          <View style={styles.sectionContainerContact}>
            <Text style={styles.sectionText}>7. Contact Us</Text>
            <Text style={styles.termsConditionsTextContent}>
              If you have any questions about these terms, please contact us at:
            </Text>
            <Text style={styles.contactUsEmail} selectable>
              {APP_EMAIL}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsAndConditions;
