export type Student = {
  associated_family: number;
  first_name: string;
  id: number;
  last_name: string;
  email_address: string;
  phone_number: string;
};

type StudentOmit = "associated_family" | "id";

export type StudentCardType = Omit<Student, StudentOmit> & {
  id?: number;
};
