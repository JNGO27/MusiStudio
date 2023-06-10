import { useRef } from "react";
import { FlatList, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import uuid from "react-native-uuid";
import { useScrollToTop } from "@react-navigation/native";

import type { RefObject } from "react";

import { CallOrMessageContext } from "@src/contexts/CallOrMessageContext";
import { useResetTimedStatusMessage } from "@src/hooks";
import {
  DataCardsContainer,
  StudentCard,
  FamilyCard,
  CallOrMessageModal,
  TimedStatusMessage,
  ThreeDotsLoading,
} from "@src/components";

import { useAppSelector } from "@src/redux";
import { useGetAllStudentsDataQuery } from "@src/redux/services/supabaseAPI";
import {
  getTimedStatusMessageOccurred,
  getTimedStatusMessageType,
} from "@src/redux/selectors";

import useResponsiveness from "@src/hooks/useResponsiveness";

import { MusicBarsCurvedHorizontal } from "@src/assets/illustrations";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  spacing,
  colors: {
    purples,
    gradients: { purpleGradient },
  },
} = globalStyles;

type MyRef = RefObject<FlatList>;

const StudentsHome = () => {
  useResetTimedStatusMessage();

  const { data: allStudentRelatedData, isLoading } = useGetAllStudentsDataQuery(
    {},
  );

  const isEmpty = allStudentRelatedData?.length === 0;

  const [horizontalScale, verticalScale, moderateScale, dimensionWidth] =
    useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    dimensionWidth,
  );

  const timedStatusMessageOccurred = useAppSelector(
    getTimedStatusMessageOccurred,
  );

  const timedStatusMessageType = useAppSelector(getTimedStatusMessageType);

  const ref: MyRef = useRef<FlatList>(null);
  useScrollToTop(ref);

  if (isLoading) {
    return (
      <LinearGradient
        style={styles.container}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <ThreeDotsLoading
          dotSize={spacing.multipleReg * 2}
          dotColor={purples.purple300}
        />
      </LinearGradient>
    );
  }

  return (
    <CallOrMessageContext>
      <LinearGradient
        style={isEmpty ? styles.emptyContainer : styles.container}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        {isEmpty ? (
          <View style={styles.backgroundDecoration}>
            <View style={styles.noStudentsContainer}>
              <Image
                style={styles.noStudentsImage}
                source={MusicBarsCurvedHorizontal}
                contentFit="cover"
              />
              <Text style={styles.bodyText}>
                You currently have no students available. Consider adding a
                student.
              </Text>
            </View>
          </View>
        ) : (
          <FlatList
            ref={ref}
            style={styles.cardsContainer}
            contentContainerStyle={styles.cardsContainerFlex}
            data={allStudentRelatedData}
            renderItem={({ item }) => (
              <DataCardsContainer
                allStudentData={[
                  <StudentCard
                    key={item.student_data.id}
                    first_name={item.student_data.first_name}
                    last_name={item.student_data.last_name}
                    phone_number={item.student_data.phone_number}
                    email_address={item.student_data.email_address}
                    currentAllData={item}
                  />,
                  <FamilyCard
                    key={item.id}
                    first_name={
                      item.associated_family.parent_guardian_first_name_1
                    }
                    last_name={
                      item.associated_family.parent_guardian_last_name_1
                    }
                    phone_number={item.associated_family.phone_number}
                    email_address={item.associated_family.email_address}
                    currentAllData={item}
                  />,
                ]}
              />
            )}
            keyExtractor={() => uuid.v4().toString()}
          />
        )}
        <CallOrMessageModal />
        {timedStatusMessageOccurred && (
          <TimedStatusMessage type={timedStatusMessageType} />
        )}
      </LinearGradient>
    </CallOrMessageContext>
  );
};

export default StudentsHome;
