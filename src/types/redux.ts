import { store } from "@src/redux/app/store";

import type { TimedStatusMessageTypes } from "./other";

import type { AllStudentFamilyDataCard } from "./cardTypes";

export type GeneralGlobal = {
  isNestedScreen: boolean;
  isFormSubmitting: boolean;
  currentRoute: string;
  timedStatusMessageOccurred: boolean;
  timedStatusMessageType: TimedStatusMessageTypes;
};

export type CardsData = {
  currentStudentFamilyData: AllStudentFamilyDataCard | null;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
