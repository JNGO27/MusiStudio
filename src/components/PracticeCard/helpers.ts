/* eslint-disable no-param-reassign */
export function areBothIntegers(ele1: unknown, ele2: unknown): boolean {
  return typeof ele1 === "number" && typeof ele2 === "number";
}

export function calculateHours(ele1: number): number {
  const minutesInAHour = 60;
  return Number((ele1 / minutesInAHour).toFixed(2));
}

export function calculateAverage(
  ele1: string | number,
  ele2: string | number,
): number {
  if (typeof ele1 === "string") ele1 = Number(ele1);
  if (typeof ele2 === "string") ele2 = Number(ele1);

  return Number((ele1 / ele2).toFixed(2));
}
