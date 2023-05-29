import { store } from "@src/redux/app/store";

import type { TimedStatusMessageTypes } from "./other";

import type { Student } from "./cardTypes";

export type GeneralGlobal = {
  isNestedScreen: boolean;
  currentRoute: string;
  timedStatusMessageOccurred: boolean;
  timedStatusMessageType: TimedStatusMessageTypes;
};

export type CardsData = {
  studentData: Student | object;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
