import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";

import { FormikSubmit } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import { useSetSession, useResponsiveness } from "@src/hooks";
import { Modal } from "@src/components";
import { useModalContext } from "@src/Contexts/ModalContext";
import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";
import EmailSVGGray from "./EmailSvgGray";
import ArrowSVG from "./ArrowSvg";

const {
  colors: {
    gradients: { purpleGradient, pinkGradient },
    purples,
  },
} = globalStyles;

type MyFormValues = {
  email: string;
};

const EmailOnlyAuth = () => {
  const [redirectUri] = useSetSession();
  const { setModalVisible, setMessage } = useModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
  );

  const formValues: MyFormValues = { email: "" };

  const continueWithEmailOnly = async ({ email }: MyFormValues) => {
    const { error } = await supabaseConfig.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUri,
      },
    });

    if (error) {
      setMessage(error.message);
      setModalVisible(true);
    } else {
      setMessage("Success!");
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
                <EmailSVGGray style={styles.emailImage} />
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
                      onPress={handleSubmit as FormikSubmit}
                      disabled={isDisabled}
                    >
                      <Text style={styles.text}>Email Magic Link</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                )}
                {isDisabled ? null : <ArrowSVG style={styles.arrow} />}
              </View>
              <View style={styles.backgroundDecoration} />
              <Modal />
            </View>
          );
        }}
      </Formik>
    </LinearGradient>
  );
};

export default EmailOnlyAuth;
