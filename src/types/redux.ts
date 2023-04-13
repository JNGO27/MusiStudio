import { store } from "@src/redux/app/store";

import type { AddTabOptions } from "@src/types";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AddButtonOptionState = {
  AddButtonOption: AddTabOptions | "";
};
