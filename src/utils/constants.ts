export const HomeOptionsArr = [
  {
    title: "Students",
  },
  {
    title: "Calender",
  },
  {
    title: "Repertoire",
  },
  {
    title: "Milage",
  },
  {
    title: "Billing",
  },
] as const;

export const HomeOptionsOnlyArr = [
  "Students",
  "Calender",
  "Repertoire",
  "Milage",
  "Billing",
] as const;

export const AuthOptionsOnlyArr = [
  "AuthHome",
  "Email",
  "SignUp",
  "SignIn",
] as const;

export const CardNavOptionsOnlyArr = [
  "StudentsHome",
  "StudentCardDetails",
  "FamilyCardDetails",
  "PracticeCardDetails",
] as const;

export const noHeaderOptions = new Set([
  "AddStudent",
  "EditStudent",
  "EditFamily",
  "StudentCardDetails",
  "FamilyCardDetails",
]);

export const TIERS = {
  FREE_TIER_ID: 1,
  PAID_TIER_ID: 2,
} as const;
