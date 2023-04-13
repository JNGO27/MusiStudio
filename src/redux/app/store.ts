import { configureStore } from "@reduxjs/toolkit";

import { supabaseApi } from "@src/redux/services/supabaseAPI";
import currentAddButtonOption from "@src/redux/features/AddButtonOptions";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    currentAddButtonOption,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
});
