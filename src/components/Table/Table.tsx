/* eslint-disable */

import * as React from "react";
import { View, Text } from "react-native";
import { supabaseConfig } from "@src/lib/supabaseConfig";
import { DataTable } from "react-native-paper";

const Table = () => {
  const [students, setStudents] = React.useState([]);
  const [page, setPage] = React.useState<number>(0);

  React.useEffect(() => {
    async function getData() {
      const { data: Students, error } = await supabaseConfig
        .from("Students")
        .select("*");

      console.log(Students);
      setStudents(Students);
    }

    getData();
  }, []);

  return (
    <DataTable style={{ height: "100%", paddingTop: 20 }}>
      <DataTable.Header>
        <DataTable.Title>Student</DataTable.Title>
        <DataTable.Title>Student Info</DataTable.Title>
      </DataTable.Header>

      {students.map((student) => (
        <DataTable.Row key={student.id}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text>
              {student.last_name}, {student.first_name}
            </Text>
            <Text>555-555-5555</Text>
          </View>
          <DataTable.Cell>555-555-5555</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default Table;
