import {
  HomeOptionsOnlyArr,
  AuthOptionsOnlyArr,
  CardNavOptionsOnlyArr,
  HeaderNavOptionsOnlyArr,
} from "@src/utils/constants";

export type NavigationOptionsTypes<
  TypePossibilities extends string,
  ScreenStack,
> = {
  [type in TypePossibilities]: keyof ScreenStack;
};

export type RootStackParamList = {
  TabNavigator: undefined;
  HeaderNav: undefined;
};

export type HomeNavOptions = (typeof HomeOptionsOnlyArr)[number];

export type HeaderStackParamList = {
  HeaderNav: { screen: AccountScreenOptions };
  AccountHome: undefined;
  AccountInformation: undefined;
  About: undefined;
  PrivacyPolicy: undefined;
  TermsAndConditions: undefined;
};

export type HeaderAccountNavOptions = (typeof HeaderNavOptionsOnlyArr)[number];

export type AccountScreenOptions = keyof HeaderStackParamList;

export type AuthStackParamList = {
  AuthHome: undefined;
  Email: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  ResetForm: undefined;
  PrivacyPolicy: undefined;
  TermsAndConditions: undefined;
};

export type AuthNavOptions = (typeof AuthOptionsOnlyArr)[number];

export type CardsNavParamList = {
  StudentsHome: undefined;
  StudentCardDetails: undefined;
  FamilyCardDetails: undefined;
  PracticeCardDetails: undefined;
  EditStudent: undefined;
  EditFamily: undefined;
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
  AddStudent: undefined;
};

export type AddTabOptions = keyof AddTabParamList;

export type AddStudentParamList = {
  AddStudent: undefined;
  StudentsNav: undefined;
};

export type HomeTabScreenParamList = {
  HomeTabScreen: undefined;
  StudentsNav: undefined;
};

export type AllNavParamLists =
  | RootStackParamList
  | HeaderStackParamList
  | CardsNavParamList
  | TabNavigatorParamList
  | AddTabParamList
  | AddStudentParamList
  | HomeTabScreenParamList;

export type AllNavOptions =
  | keyof RootStackParamList
  | keyof HeaderStackParamList
  | keyof CardsNavParamList
  | keyof TabNavigatorParamList
  | keyof AddTabParamList
  | keyof AddStudentParamList
  | keyof HomeTabScreenParamList;
