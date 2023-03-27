import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { supabaseConfig } from "@src/lib/supabaseConfig";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllStudentsData: builder.query({
      queryFn: async () => {
        const { data, error } = await supabaseConfig
          .from("Students")
          .select(
            "id, first_name, last_name, phone_number, email_address, associated_family (parent_guardian_first_name_1, parent_guardian_last_name_1, phone_number, email_address)",
          );

        if (error) {
          throw new Error(error.message);
        }

        return { data };
      },
    }),
  }),
});

export const { useGetAllStudentsDataQuery } = supabaseApi;
