export type RateOptions = "per_hour" | "per_lesson" | "per_month";

export type StudentFormValues = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  family_first_name: string;
  family_last_name: string;
  family_phone_number: string;
  family_email: string;
  existing_family_id: string;
  lesson_length: string;
  rate_per_time: RateOptions;
  rate: string;
};

export type RequiredStudentFormValues = {
  first_name_empty: boolean;
  last_name_empty: boolean;
  family_first_name_empty: boolean;
  family_last_name_empty: boolean;
  rate_empty: boolean;
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

export type RequiredStudentFormValuesActions =
  | { type: "Student First Name Required" }
  | { type: "Student Last Name Required" }
  | { type: "Parent First Name Required" }
  | { type: "Parent Last Name Required" }
  | { type: "Rate Required" };
