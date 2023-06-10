import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { GeneralGlobal, TimedStatusMessageTypes } from "@src/types";

const initialState: GeneralGlobal = {
  isNestedScreen: false,
  currentRoute: "",
  timedStatusMessageOccurred: false,
  timedStatusMessageType: "",
};

export const generalGlobalData = createSlice({
  name: "generalGlobalData",
  initialState,
  reducers: {
    setIsNestedScreen: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isNestedScreen: payload,
      };
    },
    setRoute: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        currentRoute: payload,
      };
    },
    setTimedStatusMessageOccured: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      return {
        ...state,
        timedStatusMessageOccurred: payload,
      };
    },
    setTimedStatusMessageType: (
      state,
      { payload }: PayloadAction<TimedStatusMessageTypes>,
    ) => {
      return {
        ...state,
        timedStatusMessageType: payload,
      };
    },
  },
});

export const {
  setIsNestedScreen,
  setRoute,
  setTimedStatusMessageOccured,
  setTimedStatusMessageType,
} = generalGlobalData.actions;

export default generalGlobalData.reducer;
