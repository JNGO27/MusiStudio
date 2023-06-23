/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
} from "react-native";
import { Formik } from "formik";

import { useAppSelector } from "@src/redux";
import { getUserEmail } from "@src/redux/selectors";

import type { GestureResponderEvent } from "react-native";

import type { FormikDeleteAccount, FormikSubmit } from "@src/types";

import { useResponsiveness, useIsKeyboardVisible } from "@src/hooks";

import { CriticalIcon } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";

import createStyleSheet from "./styles";

const {
  colors: { reds },
} = globalStyles;

type Props = {
  dispatchCriticalAction: FormikDeleteAccount;
  criticalHeaderText: string;
  criticalBodyText: string;
  criticalActionText: string;
  criticalFinalizationText: string;
  modalVisible: boolean;
  openOrCloseModal: () => void;
};

const CriticalModal = ({
  dispatchCriticalAction,
  criticalHeaderText,
  criticalBodyText,
  criticalActionText,
  criticalFinalizationText,
  modalVisible,
  openOrCloseModal,
}: Props) => {
  const userEmail = useAppSelector(getUserEmail);

  const isKeyboardVisible = useIsKeyboardVisible();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();

  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
    isKeyboardVisible,
  );

  const initialValues = {
    email: "",
  };

  return (
    <Modal
      style={styles.modalContainer}
      visible={modalVisible}
      onRequestClose={openOrCloseModal}
      animationType="slide"
      transparent
    >
      <TouchableWithoutFeedback onPress={openOrCloseModal}>
        <View style={styles.modalBackground}>
          <View
            style={styles.modalCard}
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
          >
            <View style={styles.innerContainer}>
              <CriticalIcon style={styles.icon} stroke={reds.red400} />
              <View style={styles.optionsContainer}>
                {!isKeyboardVisible && (
                  <>
                    <Text style={styles.headerText}>{criticalHeaderText}</Text>
                    <Text style={styles.bodyText}>{criticalBodyText}</Text>
                  </>
                )}
                <Text style={styles.bodyText}>{criticalFinalizationText}</Text>

                <Text style={styles.bodyText}>Email:</Text>
                <Text style={styles.userEmailText}>{userEmail}</Text>
                <Formik
                  initialValues={initialValues}
                  onSubmit={dispatchCriticalAction}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                  }) => {
                    const isDisabled = values.email !== userEmail;
                    const deleteUserButtonStyles = isDisabled
                      ? styles.delteUserButtonDisabled
                      : styles.delteUserButton;

                    return (
                      <>
                        <TextInput
                          style={styles.emailInput}
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                          value={values.email}
                          placeholder="Email"
                        />
                        {errors.email && <Text>{errors.email}</Text>}

                        <View style={styles.buttonsGroup}>
                          <TouchableOpacity
                            disabled={isDisabled}
                            style={deleteUserButtonStyles}
                            onPress={handleSubmit as FormikSubmit}
                          >
                            <Text style={styles.buttonText}>
                              {criticalActionText}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.buttonCancel}
                            onPress={openOrCloseModal}
                          >
                            <Text style={styles.buttonText}>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    );
                  }}
                </Formik>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CriticalModal;
