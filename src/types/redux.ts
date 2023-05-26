import { store } from "@src/redux/app/store";

import type { TimedStatusMessageTypes } from "./other";

export type GeneralGlobal = {
  isNestedScreen: boolean;
  currentRoute: string;
  timedStatusMessageOccurred: boolean;
  timedStatusMessageType: TimedStatusMessageTypes;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
