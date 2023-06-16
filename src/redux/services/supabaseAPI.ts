import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  syncNewUserProfileQueryFn,
  getAllStudentsDataQueryFn,
  getStudentsCountQueryFn,
  getAllFamiliesDataQueryFn,
  insertStudentDataQueryFn,
  insertStudentDataExistingFamilyQueryFn,
  editStudentDataMutationQueryFn,
  deleteStudentDataMutationQueryFn,
  editFamilyDataMutationQueryFn,
  deleteFamilyDataMutationQueryFn,
} from "./supabaseQueryFnHelpers";

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    syncNewUserProfile: builder.query(syncNewUserProfileQueryFn),
    getAllStudentsData: builder.query(getAllStudentsDataQueryFn),
    getStudentsCount: builder.query(getStudentsCountQueryFn),
    getAllFamilyData: builder.query(getAllFamiliesDataQueryFn),
    insertStudentData: builder.mutation(insertStudentDataQueryFn),
    insertStudentExistingFamilyData: builder.mutation(
      insertStudentDataExistingFamilyQueryFn,
    ),
    editStudentData: builder.mutation(editStudentDataMutationQueryFn),
    deleteStudentData: builder.mutation(deleteStudentDataMutationQueryFn),
    editFamilyData: builder.mutation(editFamilyDataMutationQueryFn),
    deleteFamilyData: builder.mutation(deleteFamilyDataMutationQueryFn),
  }),
  tagTypes: ["Students", "Families"],
});

export const {
  useSyncNewUserProfileQuery,
  useGetAllStudentsDataQuery,
  useGetStudentsCountQuery,
  useGetAllFamilyDataQuery,
  useInsertStudentDataMutation,
  useInsertStudentExistingFamilyDataMutation,
  useEditStudentDataMutation,
  useDeleteStudentDataMutation,
  useEditFamilyDataMutation,
  useDeleteFamilyDataMutation,
} = supabaseApi;
