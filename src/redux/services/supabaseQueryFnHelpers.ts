/* eslint-disable @typescript-eslint/naming-convention */
import { supabaseConfig } from "@src/lib/supabaseConfig";

import type {
  StudentFormValues,
  EditStudentFormValues,
  EditFamilyFormValues,
} from "@src/types";

import { TIERS } from "@src/utils/constants";

export const syncNewUserProfileQueryFn = {
  queryFn: async () => {
    const userData = await supabaseConfig.auth.getUser();

    const user_id = String(userData.data.user?.id);

    const { data: userExists, error: userExistsError } =
      await supabaseConfig.rpc("user_exists", {
        p_user_id: user_id,
      });

    if (userExistsError) {
      throw new Error(userExistsError.message);
    }

    if (!userExists) {
      const { FREE_TIER_ID } = TIERS;
      const profileData = [{ user_id, tier: FREE_TIER_ID }];

      const { error } = await supabaseConfig
        .from("Profiles")
        .insert(profileData);

      if (error) {
        throw new Error(error.message);
      }
    }

    return { data: {} };
  },
  providesTags: [{ type: "Profile" } as const],
};

export const getUserProfileDataQueryFn = {
  queryFn: async () => {
    const { data, error } = await supabaseConfig.auth.getUser();

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  providesTags: [{ type: "Profile" } as const],
};

export const getAllStudentsDataQueryFn = {
  queryFn: async () => {
    const { data: studentData, error } = await supabaseConfig
      .from("Students_All_Data")
      .select(
        "id, student_data (id, first_name, last_name, phone_number, email_address, lesson_length, rate_per_time, rate, instrument, skill_level, gender, age, family_id), associated_family (id, parent_guardian_first_name_1, parent_guardian_last_name_1, phone_number, email_address, parent_guardian_first_name_2, parent_guardian_last_name_2, phone_number_2, email_address_2)",
      );

    if (error) {
      throw new Error(error.message);
    }
    const data = studentData;

    return { data };
  },
  providesTags: [{ type: "Students" } as const],
};

export const getStudentsCountQueryFn = {
  queryFn: async () => {
    const { data, error } = await supabaseConfig.rpc("get_student_count");

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  providesTags: [{ type: "Students" } as const],
};

export const getAllFamiliesDataQueryFn = {
  queryFn: async () => {
    const { data: studentData, error } = await supabaseConfig
      .from("Families")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    const data = studentData;

    return { data };
  },
  providesTags: [{ type: "Students" } as const],
};

export const insertStudentDataQueryFn = {
  queryFn: async (formValues: StudentFormValues) => {
    const userData = await supabaseConfig.auth.getUser();
    const user_id = String(userData.data.user?.id);

    const studentData = [
      {
        user_id,
        family_id: 9999,
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        phone_number: formValues.phone_number,
        email_address: formValues.email,
        rate: formValues.rate,
        lesson_length: formValues.lesson_length,
        rate_per_time: formValues.rate_per_time,
        instrument: formValues.instrument,
        skill_level: formValues.skill_level,
        gender: formValues.gender,
        age: formValues.age,
      },
    ];

    const familyData = [
      {
        user_id,
        parent_guardian_first_name_1: formValues.family_first_name,
        parent_guardian_last_name_1: formValues.family_last_name,
        phone_number: formValues.family_phone_number,
        email_address: formValues.family_email,
        parent_guardian_first_name_2: formValues.family_first_name_2,
        parent_guardian_last_name_2: formValues.family_last_name_2,
        phone_number_2: formValues.family_phone_number_2,
        email_address_2: formValues.family_email_2,
      },
    ];

    const { data: newFamilyId, error: familiesTableError } =
      await supabaseConfig.from("Families").insert(familyData).select("id");

    if (familiesTableError) {
      throw new Error(familiesTableError.message);
    }

    studentData[0].family_id = Number(newFamilyId[0].id);

    const { data: newStudentId, error: studentsTableError } =
      await supabaseConfig.from("Students").insert(studentData).select("id");

    if (studentsTableError) {
      if (
        studentsTableError?.message === "TIER LIMIT: Cannot insert new data"
      ) {
        const { error } = await supabaseConfig
          .from("Families")
          .delete()
          .eq("id", newFamilyId[0].id);

        if (error) {
          throw new Error(error.message);
        }
      } else {
        throw new Error(studentsTableError.message);
      }
    }

    const newStudentAllData = [
      {
        user_id,
        student_data: Number(newStudentId[0].id),
        associated_family: Number(newFamilyId[0].id),
      },
    ];

    const { data, error } = await supabaseConfig
      .from("Students_All_Data")
      .insert(newStudentAllData);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [{ type: "Students" } as const],
};

export const insertStudentDataExistingFamilyQueryFn = {
  queryFn: async (formValues: StudentFormValues) => {
    const userData = await supabaseConfig.auth.getUser();
    const user_id = String(userData.data.user?.id);

    const studentData = [
      {
        user_id,
        family_id: 9999,
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        phone_number: formValues.phone_number,
        email_address: formValues.email,
        rate: formValues.rate,
        lesson_length: formValues.lesson_length,
        rate_per_time: formValues.rate_per_time,
        instrument: formValues.instrument,
        skill_level: formValues.skill_level,
        gender: formValues.gender,
        age: formValues.age,
      },
    ];

    const idExists = formValues.existing_family_id.length >= 1;
    const noFamilyName =
      formValues.family_first_name.length === 0 &&
      formValues.family_last_name.length === 0;
    let existingFamilyData: number | null = null;

    if (idExists && noFamilyName) {
      existingFamilyData = Number(formValues.existing_family_id);
    }

    studentData[0].family_id = Number(formValues.existing_family_id);

    const { data: newStudentId, error: studentsTableError } =
      await supabaseConfig.from("Students").insert(studentData).select("id");

    if (studentsTableError) {
      throw new Error(studentsTableError.message);
    }

    const newStudentAllData = [
      {
        user_id,
        student_data: Number(newStudentId[0].id),
        associated_family: existingFamilyData,
      },
    ];

    const { data, error } = await supabaseConfig
      .from("Students_All_Data")
      .insert(newStudentAllData);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [
    { type: "Students" } as const,
    { type: "Families" } as const,
  ],
};

export const editStudentDataMutationQueryFn = {
  queryFn: async (formValues: EditStudentFormValues) => {
    const studentData = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      phone_number: formValues.phone_number,
      email_address: formValues.email,
      rate: formValues.rate,
      lesson_length: formValues.lesson_length,
      rate_per_time: formValues.rate_per_time,
      instrument: formValues.instrument,
      skill_level: formValues.skill_level,
      gender: formValues.gender,
      age: formValues.age,
    };

    const id = String(formValues.id);

    const { data, error } = await supabaseConfig
      .from("Students")
      .update(studentData)
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [
    { type: "Students" } as const,
    { type: "Families" } as const,
  ],
};

export const deleteStudentDataMutationQueryFn = {
  queryFn: async (studentId: number) => {
    const id = String(studentId);

    const { data, error } = await supabaseConfig
      .from("Students")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    const { error: familyError } = await supabaseConfig.rpc(
      "delete_families_without_students",
    );

    if (familyError) {
      throw new Error(familyError.message);
    }

    return { data };
  },
  invalidatesTags: [{ type: "Students" } as const],
};

export const editFamilyDataMutationQueryFn = {
  queryFn: async (formValues: EditFamilyFormValues) => {
    const familyData = {
      id: formValues.id,
      parent_guardian_first_name_1: formValues.family_first_name,
      parent_guardian_last_name_1: formValues.family_last_name,
      phone_number: formValues.family_phone_number,
      email_address: formValues.family_email,
      parent_guardian_first_name_2: formValues.family_first_name_2,
      parent_guardian_last_name_2: formValues.family_last_name_2,
      phone_number_2: formValues.family_phone_number_2,
      email_address_2: formValues.family_email_2,
    };

    const id = String(formValues.id);

    const { data, error } = await supabaseConfig
      .from("Families")
      .update(familyData)
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [{ type: "Students" } as const],
};

export const deleteFamilyDataMutationQueryFn = {
  queryFn: async (familyId: number) => {
    const id = String(familyId);

    const { data, error } = await supabaseConfig
      .from("Families")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  },
  invalidatesTags: [
    { type: "Students" } as const,
    { type: "Families" } as const,
  ],
};
