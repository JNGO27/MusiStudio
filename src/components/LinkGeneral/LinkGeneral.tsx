import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { AuthStackParamList, RootStackParamList } from "@src/types";

import styles from "./styles";

type AllNavStackOptions = AuthStackParamList & RootStackParamList;

type NavigationProps = NativeStackNavigationProp<AllNavStackOptions>;

type LinkOptionsProps = {
  link: keyof AllNavStackOptions;
  linkText: string;
};

const LinkGeneral = ({ link, linkText }: LinkOptionsProps) => {
  const navigator = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigator.navigate(link)}>
      <Text style={styles.text}>{linkText}</Text>
    </TouchableOpacity>
  );
};

export default LinkGeneral;
