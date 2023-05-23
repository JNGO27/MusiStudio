import { createSelector } from "reselect";

import { RootState } from "@src/types";

export const getGeneralGlobalData = (state: RootState) =>
  state.generalGlobalData;

export const getTimedStatusMessageOccurred = createSelector(
  getGeneralGlobalData,
  (globalState) => globalState.timedStatusMessageOccurred,
);

export const getCurrentRoute = createSelector(
  getGeneralGlobalData,
  (globalState) => globalState.currentRoute,
);
