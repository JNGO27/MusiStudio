import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";

// Safe to use in client due to Supabase safety
const SUPABASE_URL = "https://fkxmnihdzrodgtmebjfs.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZreG1uaWhkenJvZGd0bWViamZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MzM4MzIsImV4cCI6MTk5MzEwOTgzMn0.AcAC3br3ZTk77GNZz-XHSLwfb_hPuSRxW5JBzXvX1rk";
// eslint-disable-next-line import/prefer-default-export
export const supabaseConfig = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
  },
});
