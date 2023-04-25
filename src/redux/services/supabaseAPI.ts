import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  getAllStudentsDataQueryFn,
  insertStudentDataQueryFn,
} from "./supabaseQueryFnHelpers";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllStudentsData: builder.query(getAllStudentsDataQueryFn),
    insertStudentData: builder.mutation(insertStudentDataQueryFn),
  }),
  tagTypes: ["Students"],
});

export const { useGetAllStudentsDataQuery, useInsertStudentDataMutation } =
  supabaseApi;
