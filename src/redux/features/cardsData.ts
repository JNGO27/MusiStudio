import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { CardsData, AllStudentFamilyDataCard } from "@src/types";

const initialState: CardsData = {
  currentStudentFamilyData: null,
};

export const globalCardsData = createSlice({
  name: "globalCardsData",
  initialState,
  reducers: {
    setCurrentStudentFamilyData: (
      state,
      { payload }: PayloadAction<AllStudentFamilyDataCard>,
    ) => {
      return {
        ...state,
        currentStudentFamilyData: payload,
      };
    },
  },
});

export const { setCurrentStudentFamilyData } = globalCardsData.actions;

export default globalCardsData.reducer;
