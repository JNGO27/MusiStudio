// eslint-disable-next-line import/no-extraneous-dependencies
import "react-native-url-polyfill/auto";
import { useEffect } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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
  useEffect(() => {
    async function getData() {
      const { data: Students } = await supabase.from("Students").select("*");

      // eslint-disable-next-line no-console
      console.log(Students);
    }

    getData();
  }, []);

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
