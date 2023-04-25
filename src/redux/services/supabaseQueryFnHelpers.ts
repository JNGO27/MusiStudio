import { supabaseConfig } from "@src/lib/supabaseConfig";

import type { StudentFormValues } from "@src/types";

import { convertToInt8 } from "@src/redux/helpers";

export const getAllStudentsDataQueryFn = {
  queryFn: async () => {
    const { data: studentData, error } = await supabaseConfig
      .from("Students_All_Data")
      .select(
        "student_data (id, first_name, last_name, phone_number, email_address), associated_family (parent_guardian_first_name_1, parent_guardian_last_name_1, phone_number, email_address)",
      );

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
    const studentData = [
      {
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        phone_number: formValues.phone_number,
        email_address: formValues.email,
        rate: formValues.rate,
      },
    ];

    const familyData = [
      {
        parent_guardian_first_name_1: formValues.family_first_name,
        parent_guardian_last_name_1: formValues.family_last_name,
        phone_number: formValues.family_phone_number,
        email_address: formValues.family_email,
      },
    ];

    const { data: newStudentId, error: studentsTableError } =
      await supabaseConfig.from("Students").insert(studentData).select("id");

    if (studentsTableError) {
      throw new Error(studentsTableError.message);
    }

    const { data: newFamilyId, error: familiesTableError } =
      await supabaseConfig.from("Families").insert(familyData).select("id");

    if (familiesTableError) {
      throw new Error(familiesTableError.message);
    }

    const newStudentAllData = [
      {
        student_data: convertToInt8(newStudentId[0].id),
        associated_family: convertToInt8(newFamilyId[0].id),
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
