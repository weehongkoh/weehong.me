export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");

export const stripHtmlTags = (html: string) =>
  html && html.replace(/<[^>]*>?/gm, "");

export const splitNewLine = (text: string) => text.split("\n");
