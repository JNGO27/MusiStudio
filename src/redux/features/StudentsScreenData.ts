import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { StudentsAllDataType, StudentAndFamily } from "@src/types";

const initialState: StudentsAllDataType = {
  studentsAllData: [],
};

export const currentStudentsAllData = createSlice({
  name: "currentStudentsAllData",
  initialState,
  reducers: {
    setInitialStudentsAllData: (
      state,
      { payload }: PayloadAction<StudentAndFamily[]>,
    ) => {
      return {
        ...state,
        studentsAllData: payload,
      };
    },
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

export const { addStudentRowData, setInitialStudentsAllData } =
  currentStudentsAllData.actions;

export default currentStudentsAllData.reducer;
