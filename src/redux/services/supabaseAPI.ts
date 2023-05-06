import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  getAllStudentsDataQueryFn,
  getAllFamiliesDataQueryFn,
  insertStudentDataQueryFn,
  insertStudentDataExistingFamilyQueryFn,
} from "./supabaseQueryFnHelpers";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllStudentsData: builder.query(getAllStudentsDataQueryFn),
    getAllFamilyData: builder.query(getAllFamiliesDataQueryFn),
    insertStudentData: builder.mutation(insertStudentDataQueryFn),
    insertStudentExistingFamilyData: builder.mutation(
      insertStudentDataExistingFamilyQueryFn,
    ),
  }),
  tagTypes: ["Students", "Families"],
});

export const {
  useGetAllStudentsDataQuery,
  useGetAllFamilyDataQuery,
  useInsertStudentDataMutation,
  useInsertStudentExistingFamilyDataMutation,
} = supabaseApi;
