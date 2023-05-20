import { useRef } from "react";
import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
} from "@src/components";

import type { AllStudentFamilyDataCard } from "@src/types";

import { useAppSelector } from "@src/redux";
import { useGetAllStudentsDataQuery } from "@src/redux/services/supabaseAPI";
import { getGeneralGlobalData } from "@src/redux/selectors";

import globalStyles from "@src/globalStyles";
import createStyleSheet from "./styles";

const {
  colors: {
    gradients: { purpleGradient },
  },
} = globalStyles;

type MyRef = RefObject<FlatList>;

const StudentsHome = () => {
  useResetTimedStatusMessage();

  const { timedStatusMessageOccurred } = useAppSelector(getGeneralGlobalData);
  const { data: allStudentRelatedData } = useGetAllStudentsDataQuery({});
  const ref: MyRef = useRef<FlatList>(null);

  const styles = createStyleSheet();

  useScrollToTop(ref);

  return (
    <CallOrMessageContext>
      <LinearGradient
        style={styles.container}
        colors={purpleGradient.colors}
        locations={purpleGradient.locations}
        start={purpleGradient.start}
        end={purpleGradient.end}
      >
        <FlatList
          ref={ref}
          style={styles.cardsContainer}
          contentContainerStyle={styles.cardsContainerFlex}
          data={allStudentRelatedData as AllStudentFamilyDataCard[]}
          renderItem={({ item }) => (
            <DataCardsContainer
              allStudentData={[
                <StudentCard
                  key={item.student_data.id}
                  first_name={item.student_data.first_name}
                  last_name={item.student_data.last_name}
                  phone_number={item.student_data.phone_number}
                  email_address={item.student_data.email_address}
                />,
                <FamilyCard
                  key={item.id}
                  first_name={
                    item.associated_family.parent_guardian_first_name_1
                  }
                  last_name={item.associated_family.parent_guardian_last_name_1}
                  phone_number={item.associated_family.phone_number}
                  email_address={item.associated_family.email_address}
                />,
              ]}
            />
          )}
          keyExtractor={() => uuid.v4().toString()}
        />
        <CallOrMessageModal />
        {timedStatusMessageOccurred && <TimedStatusMessage type="Success" />}
      </LinearGradient>
    </CallOrMessageContext>
  );
};

export default StudentsHome;
