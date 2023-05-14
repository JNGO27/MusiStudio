import { configureStore } from "@reduxjs/toolkit";

import { supabaseApi } from "@src/redux/services/supabaseAPI";
import generalGlobalData from "@src/redux/features/generalGlobalData";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    generalGlobalData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
});
