import { SafeAreaView, View, Text, FlatList } from "react-native";

const idGenerator = (() => {
  let id = 0;

  // eslint-disable-next-line func-names
  return function () {
    id += 1;
    return id;
  };
})();

type Obj = {
  id: number;
  name: string;
};

const dummyData: Obj[] = [
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
  {
    id: idGenerator(),
    name: `Person`,
  },
];

const Item = ({ id, name }: Obj) => {
  return (
    <View className="flex flex-row">
      <Text className="flex flex-1">{id}</Text>
      <Text className="flex flex-1">{name}</Text>
    </View>
  );
};

const Table = () => {
  return (
    <SafeAreaView className="">
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <Item id={item.id} name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Table;
