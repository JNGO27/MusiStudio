import type { TimedStatusMessageTypes, StyleSheetProps } from "@src/types";

export function getTypeStyleResults(
  type: TimedStatusMessageTypes,
  styles: StyleSheetProps,
) {
  let result;
  switch (type) {
    case "Success":
      result = styles.messageSuccessContainer;
      break;
    case "Error":
      result = styles.messageErrorContainer;
      break;
    case "Canceled":
      result = styles.messageCancelContainer;
      break;
    default:
      throw new Error("Must be a valid TimedStatusMessage type");
  }

  return result;
}

export function getTypeMessage(type: TimedStatusMessageTypes, isEdit: boolean) {
  let result;

  if (type === "Success") {
    if (isEdit) {
      console.log("edit");
      result = "Student has successfully been edited.";
    } else {
      console.log("add");
      result = "Student has successfully been added.";
    }
  } else if (type === "Canceled") {
    if (isEdit) {
      result = "Student form editing has been canceled.";
    } else {
      result = "Student form submission has been canceled.";
    }
  } else {
    result = "Please fill out the empty form values highlighted in red.";
  }

  return result;
}
