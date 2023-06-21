import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  syncNewUserProfileQueryFn,
  getUserProfileDataQueryFn,
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
    getUserProfileData: builder.query(getUserProfileDataQueryFn),
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
  tagTypes: ["Profile", "Students", "Families"],
});

export const {
  useSyncNewUserProfileQuery,
  useGetUserProfileDataQuery,
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
