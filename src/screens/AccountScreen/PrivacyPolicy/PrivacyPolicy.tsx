import { ScrollView, View, Text } from "react-native";

import useResponsiveness from "@src/hooks/useResponsiveness";
import { BackButtonCustom } from "@src/components";

import { APP_NAME, APP_EMAIL } from "@src/utils/constants";

import createStyleSheet from "./styles";

const PrivacyPolicy = () => {
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
      <Text style={styles.headlineText}>Privacy Policy</Text>
      <View style={styles.allContentContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>1. Introduction</Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              At {APP_NAME}, we take your privacy seriously. This Privacy Policy
              explains what personal information we collect, why we collect it,
              how we use it, and how we protect it.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>
              2. What Information We Collect
            </Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              Our app collects the following information directly from our
              users: {"\n"}- Parent names {"\n"}- Student names {"\n"}- Parent
              emails {"\n"}- Student emails {"\n"}- Parent phone numbers {"\n"}-
              Student phone numbers {"\n"}- Student age {"\n"}- Student Gender{" "}
              {"\n"} If you choose to sign in via Google OAuth, we may also
              collect your Google username, profile picture, and email address.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>
              3. How We Use the Collected Information
            </Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              We use your information to provide our services, respond to your
              inquiries, send updates, and for the overall enhancement of your
              experience with our app.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>4. Data Storage and Security</Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              Your data is stored in a secure manner using Supabase, a modern
              backend service. Supabase uses secure, encrypted servers to ensure
              your data is protected to the best extent possible.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>
              5. Data Sharing and Third Party Services
            </Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              We do not share your personal information with any third parties,
              except as necessary to provide our services. Our app uses
              third-party services that may collect information used to identify
              you. These include Google OAuth, Redux Toolkit, RTK Query, and
              Expo, which collect data for operational purposes and to improve
              your user experience.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>6. User Rights</Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              You have the right to access, correct, or delete your personal
              information at any time. Please contact us directly if you wish to
              exercise these rights.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>7. Children’s Privacy</Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              Our services are primarily intended for adults, specifically music
              teachers, who input student information. While we collect student
              information, we do so only from adult users and in compliance with
              the Children&apos;s Online Privacy Protection Act (COPPA). We do
              not knowingly collect personal information directly from children
              under the age of 13. If we discover that a child under 13 has
              provided us with personal information, we will delete such
              information from our servers immediately unless we have obtained
              verifiable parental consent.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>
              8. Updates to This Privacy Policy
            </Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;effective date&quot; at the top of this
              Privacy Policy.
            </Text>
          </View>

          <View style={styles.sectionContainerContact}>
            <Text style={styles.sectionText}>9. Contact Us</Text>
            <Text style={styles.privacyPolicyAppTextContent}>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at:
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

export default PrivacyPolicy;
