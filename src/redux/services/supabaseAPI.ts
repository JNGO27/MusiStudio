import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  getAllStudentsDataQueryFn,
  getAllFamiliesDataQueryFn,
  insertStudentDataQueryFn,
} from "./supabaseQueryFnHelpers";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllStudentsData: builder.query(getAllStudentsDataQueryFn),
    getAllFamilyData: builder.query(getAllFamiliesDataQueryFn),
    insertStudentData: builder.mutation(insertStudentDataQueryFn),
  }),
  tagTypes: ["Students", "Families"],
});

export const {
  useGetAllStudentsDataQuery,
  useGetAllFamilyDataQuery,
  useInsertStudentDataMutation,
} = supabaseApi;
