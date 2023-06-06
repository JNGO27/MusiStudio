export type RateOptions = "per_hour" | "per_lesson" | "per_month";

export type StudentFormValues = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  instrument: string;
  skill_level: string;
  age: string;
  gender: string;
  family_first_name: string;
  family_last_name: string;
  family_phone_number: string;
  family_email: string;
  family_first_name_2: string;
  family_last_name_2: string;
  family_phone_number_2: string;
  family_email_2: string;
  existing_family_id: string;
  lesson_length: string;
  rate_per_time: RateOptions;
  rate: string;
  family_id: number;
};

export type EditStudentFormValues = {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  instrument: string;
  skill_level: string;
  age: string;
  gender: string;
  lesson_length: string;
  rate_per_time: RateOptions;
  rate: string;
};

export type FamilyTypeCheckboxesState = {
  NEW_FAMILY: boolean;
  EXISTS: boolean;
};

export type FamilyTypeCheckboxesActions =
  | { type: "NEW_FAMILY" }
  | { type: "EXISTS" };

export type RateCheckboxesState = {
  PER_HOUR: boolean;
  PER_LESSON: boolean;
  PER_MONTH: boolean;
};

export type RateCheckboxesActions =
  | { type: "PER_HOUR" }
  | { type: "PER_LESSON" }
  | { type: "PER_MONTH" };
