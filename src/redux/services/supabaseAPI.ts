import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import type { AllStudentFamilyDataCard, StudentFormValues } from "@src/types";

import { supabaseConfig } from "@src/lib/supabaseConfig";

import { formatStudentData } from "@src/redux/helpers";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllStudentsData: builder.query({
      queryFn: async () => {
        const { data: studentData, error } = await supabaseConfig
          .from("Students_All_Data")
          .select(
            "student_data (id, first_name, last_name, phone_number, email_address), associated_family (parent_guardian_first_name_1, parent_guardian_last_name_1, phone_number, email_address)",
          );

        if (error) {
          throw new Error(error.message);
        }

        const data = formatStudentData(
          studentData as AllStudentFamilyDataCard[],
        );

        return { data };
      },
    }),
    insertStudentData: builder.mutation({
      queryFn: async (formValues: StudentFormValues) => {
        const { data, error } = await supabaseConfig
          .from("Students")
          .insert([formValues]);

        if (error) {
          console.log(error);
        }

        return { data };
      },
    }),
  }),
});

export const { useGetAllStudentsDataQuery, useInsertStudentDataMutation } =
  supabaseApi;
