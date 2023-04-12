import {
  HomeOptionsOnlyArr,
  AuthOptionsOnlyArr,
  CardNavOptionsOnlyArr,
} from "@src/utils/constants";

export type RootStackParamList = {
  TabNavigator: undefined;
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
  StudentsHome: undefined;
  StudentCardDetails: undefined;
  FamilyCardDetails: undefined;
  PracticeCardDetails: undefined;
};

export type CardsNavOptions = (typeof CardNavOptionsOnlyArr)[number];

export type TabNavigatorParamList = {
  HomeNav: undefined;
  AddTab: undefined;
  StudentsNav: undefined;
};

export type AddTabParamList = {
  AddTab: { screen: AddTabOptions };
  AddButtonModalScreen: undefined;
  Test: undefined;
};

export type AddTabOptions = keyof AddTabParamList;
