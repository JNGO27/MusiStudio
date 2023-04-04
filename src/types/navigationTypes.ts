import {
  HomeOptionsOnlyArr,
  AuthOptionsOnlyArr,
  CardNavOptionsOnlyArr,
} from "@src/utils/constants";

export type RootStackParamList = {
  Home: undefined;
  Students: undefined;
  Calender: undefined;
  Repertoire: undefined;
  Milage: undefined;
  Billing: undefined;
};

export type HomeNavOptions = (typeof HomeOptionsOnlyArr)[number];

export type AuthStackParamList = {
  AuthHome: undefined;
  Email: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  ResetForm: undefined;
};

export type AuthNavOptions = (typeof AuthOptionsOnlyArr)[number];

export type CardsNavParamList = {
  Students: undefined;
  StudentCardDetails: undefined;
  FamilyCardDetails: undefined;
  PracticeCardDetails: undefined;
};

export type CardsNavOptions = (typeof CardNavOptionsOnlyArr)[number];
