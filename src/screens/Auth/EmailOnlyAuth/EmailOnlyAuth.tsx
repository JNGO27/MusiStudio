import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";

import { useAuthModalContext } from "@src/contexts/AuthModalContext";
import { useSetSession, useResponsiveness } from "@src/hooks";
import { AuthModal, BackButtonCustom } from "@src/components";

import type { FormikSubmit } from "@src/types";

import { supabaseConfig } from "@src/lib/supabaseConfig";

import { EmailSvg, ArrowSvg } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { purpleGradient, pinkGradient },
    grays,
    purples,
  },
} = globalStyles;

type MyFormValues = {
  email: string;
};

WebBrowser.maybeCompleteAuthSession();

const EmailOnlyAuth = () => {
  const [redirectUri] = useSetSession();
  const { setModalVisible, setMessage } = useAuthModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const formValues: MyFormValues = { email: "" };

  const continueWithEmailOnly = async ({ email }: MyFormValues) => {
    if (Platform.OS === "ios") {
      WebBrowser.dismissBrowser();
    }

    const { error } = await supabaseConfig.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUri,
      },
    });

    if (error && error.message.includes("security")) {
      setMessage(error.message);
      setModalVisible(true);
      return;
    }

    if (error) {
      setMessage(
        "uh oh... Something went wrong. Please check any formatting issues or typos with the email you typed.",
      );
      setModalVisible(true);
    } else {
      setMessage(
        "We've emailed your magic link. Check your email and just click on the link so you get can started!",
      );
      setModalVisible(true);
    }
  };

  return (
    <LinearGradient
      colors={purpleGradient.colors}
      locations={purpleGradient.locations}
      start={purpleGradient.start}
      end={purpleGradient.end}
    >
      <BackButtonCustom />
      <Formik initialValues={formValues} onSubmit={continueWithEmailOnly}>
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          const isDisabled = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            values.email,
          );

          return (
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.headlineText}>Sign Up / Log In</Text>
                <Text style={styles.headlineSubText}>
                  Enter your email to get your magic link to sign you up or log
                  you in. Just click the link we&apos;ll send you. That&apos;s
                  it!
                </Text>
              </View>
              <View style={styles.card}>
                <EmailSvg style={styles.emailImage} color={grays.gray300} />
                <TextInput
                  style={[styles.emailInput]}
                  selectionColor={purples.purple100}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  autoComplete="email"
                  placeholder="Email address"
                />
                {isDisabled ? (
                  <View style={styles.disabledButton}>
                    <Text style={styles.text}>Email Magic Link</Text>
                  </View>
                ) : (
                  <LinearGradient
                    colors={pinkGradient.colors}
                    locations={pinkGradient.locations}
                    style={styles.magicLinkButton}
                    start={pinkGradient.start}
                    end={pinkGradient.end}
                  >
                    <TouchableOpacity
                      style={styles.magicLinkTouchable}
                      onPress={handleSubmit as FormikSubmit}
                      disabled={isDisabled}
                    >
                      <Text style={styles.text}>Email Magic Link</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                )}
                {isDisabled ? null : <ArrowSvg style={styles.arrow} />}
              </View>
              <View style={styles.backgroundDecoration} />
              <AuthModal />
            </View>
          );
        }}
      </Formik>
    </LinearGradient>
  );
};

export default EmailOnlyAuth;
