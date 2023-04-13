import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AddButtonOptionState, AddTabOptions } from "@src/types";

const initialState: AddButtonOptionState = {
  AddButtonOption: "",
};

export const currentAddButtonOption = createSlice({
  name: "currentAddButtonOption",
  initialState,
  reducers: {
    chooseOption: (
      state: AddButtonOptionState,
      { payload }: PayloadAction<AddTabOptions>,
    ) => {
      return {
        ...state,
        AddButtonOption: payload,
      };
    },
  },
});

export const { chooseOption } = currentAddButtonOption.actions;

export default currentAddButtonOption.reducer;
