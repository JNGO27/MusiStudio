export type Student = {
  id: number;
  associated_family: number;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
};

type StudentOmit = "id" | "associated_family";

export type StudentCardType = Omit<Student, StudentOmit> & {
  id?: number;
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

type FamilyOmit =
  | "id"
  | "parent_guardian_first_name_2"
  | "parent_guardian_last_name_2";

export type FamilyCardType = Omit<Family, FamilyOmit>;

export type StudentAndFamily = StudentCardType & {
  associated_family: FamilyCardType;
};
