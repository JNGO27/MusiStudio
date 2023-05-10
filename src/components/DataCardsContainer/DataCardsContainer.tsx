import { View, FlatList } from "react-native";
import uuid from "react-native-uuid";

import type { ReactNode } from "react";

type Props = {
  allStudentData: ReactNode[];
};

type ItemProps = { item: ReactNode };

const Item = ({ item }: ItemProps) => (
  <View style={{ display: "flex", flex: 1 }}>{item}</View>
);

const DataCardsContainer = ({ allStudentData }: Props) => {
  return (
    <FlatList
      horizontal
      data={allStudentData}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={() => uuid.v4().toString()}
    />
  );
};

export default DataCardsContainer;
