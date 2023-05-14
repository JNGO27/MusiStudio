import { store } from "@src/redux/app/store";

export type GeneralGlobal = {
  isNestedScreen: boolean;
  currentRoute: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
