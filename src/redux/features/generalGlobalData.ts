import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { GeneralGlobal } from "@src/types";

const initialState: GeneralGlobal = {
  isNestedScreen: false,
  currentRoute: "",
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
  },
});

export const { setIsNestedScreen, setRoute } = generalGlobalData.actions;

export default generalGlobalData.reducer;
