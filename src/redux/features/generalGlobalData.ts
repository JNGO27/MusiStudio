import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { GeneralGlobal, TimedStatusMessageTypes } from "@src/types";

const initialState: GeneralGlobal = {
  userEmail: undefined,
  userAvatarUrl: null,
  isNestedScreen: false,
  currentRoute: "",
  timedStatusMessageOccurred: false,
  timedStatusMessageType: "",
};

export const generalGlobalData = createSlice({
  name: "generalGlobalData",
  initialState,
  reducers: {
    setUserEmail: (state, { payload }: PayloadAction<undefined | string>) => {
      return {
        ...state,
        userEmail: payload,
      };
    },
    setUserAvatarUrl: (state, { payload }: PayloadAction<null | string>) => {
      return {
        ...state,
        userAvatarUrl: payload,
      };
    },
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
  setUserEmail,
  setUserAvatarUrl,
  setIsNestedScreen,
  setRoute,
  setTimedStatusMessageOccured,
  setTimedStatusMessageType,
} = generalGlobalData.actions;

export default generalGlobalData.reducer;
