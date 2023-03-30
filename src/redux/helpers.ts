/* eslint-disable */

import type { AllStudentFamilyDataCard } from "@src/types";
import { supabaseConfig } from "@src/lib/supabaseConfig";

export async function formatStudentData(data: AllStudentFamilyDataCard[]) {
  const { data: hoursData, error: hoursError } = await supabaseConfig.rpc(
    "total_hours_practiced",
  );

  const { data: daysData, error: daysError } = await supabaseConfig.rpc(
    "total_days_practiced",
  );

  if (hoursError) console.error(hoursError);
  if (daysError) console.error(daysError);

  const formattedData = data.map((item) => {
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
  });

  return formattedData;
}
