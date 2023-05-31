import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  getAllStudentsDataQueryFn,
  getAllFamiliesDataQueryFn,
  insertStudentDataQueryFn,
  insertStudentDataExistingFamilyQueryFn,
  editStudentDataMutationQueryFn,
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
    editStudentData: builder.mutation(editStudentDataMutationQueryFn),
  }),
  tagTypes: ["Students", "Families"],
});

export const {
  useGetAllStudentsDataQuery,
  useGetAllFamilyDataQuery,
  useInsertStudentDataMutation,
  useInsertStudentExistingFamilyDataMutation,
  useEditStudentDataMutation,
} = supabaseApi;
