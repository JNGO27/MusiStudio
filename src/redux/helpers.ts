/* eslint-disable */

import { supabaseConfig } from "@src/lib/supabaseConfig";

type StudentData = {
  associated_family: {
    email_address: string;
    parent_guardian_first_name_1: string;
    parent_guardian_last_name_1: string;
    phone_number: number;
  };
  days_practiced: number;
  email_address: string;
  first_name: string;
  id: number;
  last_name: string;
  minutes_practiced: number;
  phone_number: string;
};

export async function formatStudentData(data: Array<StudentData>) {
  const { data: hoursData, error: hoursError } = await supabaseConfig.rpc(
    "total_hours_practiced",
  );

  const { data: daysData, error: daysError } = await supabaseConfig.rpc(
    "total_days_practiced",
  );

  if (hoursError) console.error(hoursError);
  if (daysError) console.error(daysError);

  const formattedData = data.map(
    (item: {
      id: number;
      minutes_practiced: number;
      days_practiced: number;
    }) => {
      const newValues = hoursData.find(
        (newItem: { student_id: number }) => newItem.student_id === item.id,
      );

      const daysValues = daysData.find(
        (newItem: { student_id: number }) => newItem.student_id === item.id,
      );

      if (newValues) {
        item.minutes_practiced = newValues.minutes_practiced;
      }

      if (daysValues) {
        item.days_practiced = daysValues.date;
      }
      return item;
    },
  );

  return formattedData;
}
