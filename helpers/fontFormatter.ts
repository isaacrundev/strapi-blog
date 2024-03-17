import { Paragragh } from "..";

export const fontFormat = ({
  bold,
  italic,
  strikethrough,
  underline,
}: Paragragh) => {
  let fontArray: string[] = [];

  if (bold) fontArray = [...fontArray, "font-bold"];
  if (italic) fontArray = [...fontArray, "italic"];
  if (strikethrough) fontArray = [...fontArray, "line-through"];
  if (underline) fontArray = [...fontArray, "underline"];

  return fontArray.join(" ");
};
