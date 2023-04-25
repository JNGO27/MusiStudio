import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { StudentsAllDataType, StudentAndFamily } from "@src/types";

const initialState: StudentsAllDataType = {
  studentsAllData: [],
};

export const currentStudentsAllData = createSlice({
  name: "currentStudentsAllData",
  initialState,
  reducers: {
    addStudentRowData: (
      state: StudentsAllDataType,
      { payload }: PayloadAction<StudentAndFamily>,
    ) => {
      return {
        ...state,
        studentsRowData: payload,
      };
    },
  },
});

export const { addStudentRowData } = currentStudentsAllData.actions;

export default currentStudentsAllData.reducer;
