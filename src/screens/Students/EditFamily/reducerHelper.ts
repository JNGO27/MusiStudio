import {
  FamilyTypeCheckboxesState,
  FamilyTypeCheckboxesActions,
  RateCheckboxesState,
  RateCheckboxesActions,
} from "@src/types";

export const familyTypeInitialState: FamilyTypeCheckboxesState = {
  NEW_FAMILY: true,
  EXISTS: false,
};

export const rateInitialState: RateCheckboxesState = {
  PER_HOUR: true,
  PER_LESSON: false,
  PER_MONTH: false,
};

export function familyTypeReducer(
  checkboxActions: FamilyTypeCheckboxesState,
  action: FamilyTypeCheckboxesActions,
): FamilyTypeCheckboxesState {
  switch (action.type) {
    case "NEW_FAMILY":
      return {
        NEW_FAMILY: true,
        EXISTS: false,
      };
    case "EXISTS":
      return {
        NEW_FAMILY: false,
        EXISTS: true,
      };
    default:
      throw new Error("Must return a valid checkbox state object");
  }
}

export function rateReducer(
  checkboxActions: RateCheckboxesState,
  action: RateCheckboxesActions,
): RateCheckboxesState {
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
