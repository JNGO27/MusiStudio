export const APP_NAME = "ProtegeCoreSuite";

export const APP_EMAIL = "protegecoresuite@gmail.com";

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

export const HeaderNavOptionsOnlyArr = [
  {
    header: "Account",
    screenName: "AccountInformation",
    content: "Account email, Change profile picture",
  },
  {
    header: "About",
    screenName: "About",
    content: "Learn about us and the creator of the app",
  },
  {
    header: "Privacy Policy",
    screenName: "PrivacyPolicy",
    content: "Privacy Policy, contact us(bottom of page)",
  },
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
