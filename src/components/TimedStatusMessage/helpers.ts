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
    case "Success-Edit":
      result = styles.messageSuccessContainer;
      break;
    case "Success-Edit-Family":
      result = styles.messageSuccessContainer;
      break;
    case "Canceled":
      result = styles.messageCancelContainer;
      break;
    case "Canceled-Edit":
      result = styles.messageCancelContainer;
      break;
    case "Canceled-Edit-Family":
      result = styles.messageCancelContainer;
      break;
    case "Error":
      result = styles.messageErrorContainer;
      break;
    default:
      throw new Error("Must be a valid TimedStatusMessage type");
  }

  return result;
}

export function getTypeMessage(type: TimedStatusMessageTypes) {
  let result;

  switch (type) {
    case "Success":
      result = "Student has successfully been added.";
      break;
    case "Success-Edit":
      result = "Student has successfully been edited.";
      break;
    case "Success-Edit-Family":
      result = "Family has successfully been edited.";
      break;
    case "Canceled":
      result = "Student form submission has been canceled.";
      break;
    case "Canceled-Edit-Family":
      result = "Family form editing has been canceled.";
      break;
    default:
      result = "Please fill out the empty form values highlighted in red.";
      break;
  }

  return result;
}
