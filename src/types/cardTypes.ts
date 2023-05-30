import type { RateOptions } from "./formTypes";

export type Student = {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  instrument: string;
  skill_level: string;
  gender: string;
  age: string;
  lesson_length: string;
  rate_per_time: RateOptions;
  rate: string;
};

export type StudentCardType = {
  id?: number;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  student_data: Student;
};

export type Family = {
  id: number;
  parent_guardian_first_name_1: string;
  parent_guardian_last_name_1: string;
  parent_guardian_first_name_2: string;
  parent_guardian_last_name_2: string;
  email_address: string;
  phone_number: string;
};

export type FamilyCardType = {
  parent_guardian_first_name_1: string;
  parent_guardian_last_name_1: string;
  email_address: string;
  phone_number: string;
};

export type StudentAndFamily = {
  student_data: Student;
  associated_family: FamilyCardType;
};

// type PracticeLogData = {
//   minutes_practiced: number;
//   days_practiced: number;
// };

export type AllStudentFamilyDataCard = StudentAndFamily;
