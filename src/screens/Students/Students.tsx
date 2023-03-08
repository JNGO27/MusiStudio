import { SafeAreaView } from "react-native";

import { NavigationMenu, Table } from "@src/components";

const Students = () => {
  return (
    <SafeAreaView>
      <Table />
      <NavigationMenu />
    </SafeAreaView>
  );
};

export default Students;
