import { createSelector } from "reselect";

import { RootState } from "@src/types";

export const getGeneralGlobalData = (state: RootState) =>
  state.generalGlobalData;

export const getTimedStatusMessageOccurred = createSelector(
  getGeneralGlobalData,
  (globalState) => globalState.timedStatusMessageOccurred,
);

export const getTimedStatusMessageType = createSelector(
  getGeneralGlobalData,
  (globalState) => globalState.timedStatusMessageType,
);

export const getCurrentRoute = createSelector(
  getGeneralGlobalData,
  (globalState) => globalState.currentRoute,
);

export const getGlobalCardsData = (state: RootState) => state.globalCardsData;

export const getGlobalStudentData = createSelector(
  getGlobalCardsData,
  (globalCardsState) => globalCardsState.currentStudentFamilyData?.student_data,
);

export const getGlobalFamilyData = createSelector(
  getGlobalCardsData,
  (globalCardsState) =>
    globalCardsState.currentStudentFamilyData?.associated_family,
);
