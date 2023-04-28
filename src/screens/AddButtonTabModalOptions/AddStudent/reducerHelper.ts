type CheckboxesState = {
  PER_HOUR: boolean;
  PER_LESSON: boolean;
  PER_MONTH: boolean;
};

type CheckboxesActions =
  | { type: "PER_HOUR" }
  | { type: "PER_LESSON" }
  | { type: "PER_MONTH" };

export const rateInitialState: CheckboxesState = {
  PER_HOUR: true,
  PER_LESSON: false,
  PER_MONTH: false,
};

export function rateReducer(
  checkboxActions: CheckboxesState,
  action: CheckboxesActions,
): CheckboxesState {
  switch (action.type) {
    case "PER_HOUR":
      return {
        PER_HOUR: true,
        PER_LESSON: false,
        PER_MONTH: false,
      };
    case "PER_LESSON":
      return {
        PER_HOUR: false,
        PER_LESSON: true,
        PER_MONTH: false,
      };
    case "PER_MONTH":
      return {
        PER_HOUR: false,
        PER_LESSON: false,
        PER_MONTH: true,
      };
    default:
      throw new Error("Must return a valid checkbox state object");
  }
}
