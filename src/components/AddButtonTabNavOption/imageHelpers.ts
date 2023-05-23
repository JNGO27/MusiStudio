import type { AddTabOptions } from "@src/types";

import {
  StudentChildMale,
  StudentChildMaleTwo,
  StudentChildFemale,
  StudentChildFemaleTwo,
} from "@src/assets/illustrations";

function randomizeImage() {
  const imageOptions = [
    StudentChildMale,
    StudentChildMaleTwo,
    StudentChildFemale,
    StudentChildFemaleTwo,
  ];

  const randomIndex = Math.floor(Math.random() * imageOptions.length);
  return imageOptions[randomIndex];
}

// eslint-disable-next-line import/prefer-default-export
export const imageChoiceHelper = (option: AddTabOptions) => {
  let imageChoice;

  switch (option) {
    case "AddStudent":
      imageChoice = randomizeImage();
      break;
    default:
      throw new Error("Enter a valid image choice");
  }

  return imageChoice;
};
