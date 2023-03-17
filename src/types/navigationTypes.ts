import { HomeOptionsOnlyArr, AuthOptionsOnlyArr } from "@src/utils/constants";

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
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
};

export type AuthNavOptions = (typeof AuthOptionsOnlyArr)[number];
