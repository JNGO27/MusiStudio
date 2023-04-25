import { configureStore } from "@reduxjs/toolkit";

import { supabaseApi } from "@src/redux/services/supabaseAPI";
import currentAddStudentsAllData from "@src/redux/features/StudentsScreenData";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    currentAddStudentsAllData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
});
