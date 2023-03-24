export type Student = {
  associated_family: number;
  first_name: string;
  id: number;
  last_name: string;
  email_address: string;
  phone_number: string;
};

export type StudentCardType = {
  id?: Student["id"];
  first_name: Student["first_name"];
  last_name: Student["last_name"];
  phone_number: Student["phone_number"];
  email_address: Student["email_address"];
};
