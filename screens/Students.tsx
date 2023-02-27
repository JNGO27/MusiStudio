import { SafeAreaView } from "react-native";

import { NavigationMenu, Table } from "../components";

const Students = () => {
  return (
    <SafeAreaView className="w-full h-full pt-16">
      <Table />
      <NavigationMenu />
    </SafeAreaView>
  );
};

export default Students;
