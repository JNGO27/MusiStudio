import { useReducer } from "react";
import { View, Text, TextInput } from "react-native";
import { Image } from "expo-image";

import type { FormikHandlers, FormikHelpers } from "formik";
import type { ImageStyle } from "expo-image";

import type { StudentFormValues, StyleSheetProps } from "@src/types";

import { useResponsiveness } from "@src/hooks";
import { CheckboxCard } from "@src/components";

import { SuccessIcon } from "@src/assets/icons";

import globalStyles from "@src/globalStyles";
import changingStyles from "./rateDynamicStyles";

import { rateInitialState, rateReducer } from "../reducerHelper";

type Props = {
  values: StudentFormValues;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  setFieldValue: FormikHelpers<StudentFormValues>["setFieldValue"];
  styles: StyleSheetProps;
};

const {
  colors: { purples },
} = globalStyles;

const RateDetails = ({
  values,
  handleChange,
  handleBlur,
  setFieldValue,
  styles,
}: Props) => {
  const [rateState, rateDispatch] = useReducer(rateReducer, rateInitialState);
  const [, , moderateScale] = useResponsiveness();
  const dynamicStyles = changingStyles(moderateScale, rateState);

  const isRateEmpty = values.rate.length === 0;

  const rateToFixed = Number(values.rate).toFixed(2);

  const handlePerHour = () => {
    rateDispatch({ type: "PER_HOUR" });
    setFieldValue("rate_per_time", "per_hour");
  };

  const handlePerLesson = () => {
    rateDispatch({ type: "PER_LESSON" });
    setFieldValue("rate_per_time", "per_lesson");
  };

  const handlePerMonth = () => {
    rateDispatch({ type: "PER_MONTH" });
    setFieldValue("rate_per_time", "per_month");
  };

  return (
    <View style={styles.formSection}>
      <Text style={styles.formSectionHeaderText}>Rate</Text>
      <TextInput
        style={styles.input}
        value={values.rate}
        onChangeText={handleChange("rate")}
        onBlur={handleBlur("rate")}
        keyboardType="numeric"
        placeholder="$ USD Amount *"
        selectionColor={purples.purple100}
      />
      <View style={styles.rateOptionsTop2Container}>
        <CheckboxCard isChosen={rateState.PER_HOUR} onPress={handlePerHour}>
          <Text style={dynamicStyles.checkboxCardPerHour}>Per Hour</Text>
          {rateState.PER_HOUR ? (
            <View style={styles.perRateContainer}>
              <Image
                style={styles.checkIconRate as ImageStyle}
                source={SuccessIcon}
                contentFit="contain"
              />
              <Text
                style={
                  isRateEmpty ? styles.rateBoxAmountEmpty : styles.rateBoxAmount
                }
              >
                {!isRateEmpty ? `$${rateToFixed}` : "Enter Rate Amount"}
              </Text>
              {!isRateEmpty && <Text style={styles.perRateText}>p/h</Text>}
            </View>
          ) : null}
        </CheckboxCard>
        <CheckboxCard isChosen={rateState.PER_LESSON} onPress={handlePerLesson}>
          <Text style={dynamicStyles.checkboxCardPerLesson}>Per Lesson</Text>
          {rateState.PER_LESSON ? (
            <View style={styles.perRateContainer}>
              <Image
                style={styles.checkIconRate as ImageStyle}
                source={SuccessIcon}
                contentFit="contain"
              />
              <Text
                style={
                  isRateEmpty ? styles.rateBoxAmountEmpty : styles.rateBoxAmount
                }
              >
                {!isRateEmpty ? `$${rateToFixed}` : "Enter Rate Amount"}
              </Text>
              {!isRateEmpty && <Text style={styles.perRateText}>p/l</Text>}
            </View>
          ) : null}
        </CheckboxCard>
      </View>
      <View style={styles.rateOptionsBottomContainer}>
        <CheckboxCard isChosen={rateState.PER_MONTH} onPress={handlePerMonth}>
          <Text style={dynamicStyles.checkboxCardPerMonth}>Per Month</Text>
          {rateState.PER_MONTH ? (
            <View style={styles.perRateContainer}>
              <Image
                style={styles.checkIconRate as ImageStyle}
                source={SuccessIcon}
                contentFit="contain"
              />
              <Text
                style={
                  isRateEmpty ? styles.rateBoxAmountEmpty : styles.rateBoxAmount
                }
              >
                {!isRateEmpty ? `$${rateToFixed}` : "Enter Rate Amount"}
              </Text>
              {!isRateEmpty && <Text style={styles.perRateText}>p/m</Text>}
            </View>
          ) : null}
        </CheckboxCard>
      </View>
    </View>
  );
};

export default RateDetails;
