import { RootState } from "@src/types";

// eslint-disable-next-line import/prefer-default-export
export const getCurrentAddButtonOption = (state: RootState) =>
  state.currentAddStudentsAllData;
