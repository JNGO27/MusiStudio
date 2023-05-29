import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { CardsData, Student } from "@src/types";

const initialState: CardsData = {
  studentData: {},
};

export const globalCardsData = createSlice({
  name: "globalCardsData",
  initialState,
  reducers: {
    setStudentCardData: (state, { payload }: PayloadAction<Student>) => {
      return {
        ...state,
        studentData: payload,
      };
    },
  },
});

export const { setStudentCardData } = globalCardsData.actions;

export default globalCardsData.reducer;
