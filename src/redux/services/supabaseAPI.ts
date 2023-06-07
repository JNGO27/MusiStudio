import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  getAllStudentsDataQueryFn,
  getStudentsCountQueryFn,
  getAllFamiliesDataQueryFn,
  insertStudentDataQueryFn,
  insertStudentDataExistingFamilyQueryFn,
  editStudentDataMutationQueryFn,
  deleteStudentDataMutationQueryFn,
  deleteFamilyDataMutationQueryFn,
} from "./supabaseQueryFnHelpers";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllStudentsData: builder.query(getAllStudentsDataQueryFn),
    getStudentsCount: builder.query(getStudentsCountQueryFn),
    getAllFamilyData: builder.query(getAllFamiliesDataQueryFn),
    insertStudentData: builder.mutation(insertStudentDataQueryFn),
    insertStudentExistingFamilyData: builder.mutation(
      insertStudentDataExistingFamilyQueryFn,
    ),
    editStudentData: builder.mutation(editStudentDataMutationQueryFn),
    deleteStudentData: builder.mutation(deleteStudentDataMutationQueryFn),
    deleteFamilyData: builder.mutation(deleteFamilyDataMutationQueryFn),
  }),
  tagTypes: ["Students", "Families"],
});

export const {
  useGetAllStudentsDataQuery,
  useGetStudentsCountQuery,
  useGetAllFamilyDataQuery,
  useInsertStudentDataMutation,
  useInsertStudentExistingFamilyDataMutation,
  useEditStudentDataMutation,
  useDeleteStudentDataMutation,
  useDeleteFamilyDataMutation,
} = supabaseApi;
