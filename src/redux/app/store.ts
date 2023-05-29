import { configureStore } from "@reduxjs/toolkit";

import { supabaseApi } from "@src/redux/services/supabaseAPI";
import generalGlobalData from "@src/redux/features/generalGlobalData";
import globalCardsData from "@src/redux/features/cardsData";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    generalGlobalData,
    globalCardsData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
});
