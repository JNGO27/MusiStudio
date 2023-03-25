import type { ReactNode } from "react";
import { View, FlatList } from "react-native";
import uuid from "react-native-uuid";

type Props = {
  allStudentData: ReactNode[];
};

const DataCardsContainer = ({ allStudentData }: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={allStudentData}
        renderItem={({ item }) => item}
        keyExtractor={() => uuid.v4().toString()}
      />
    </View>
  );
};

export default DataCardsContainer;
