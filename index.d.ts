export type Article = {
  id: Number;
  attributes: ArticleAttributes;
};

export type ArticleAttributes = {
  Title: string;
  Date: string;
  Content: ArticleContent[];
};

export type ArticleContent = {
  type: "paragragh";
  children: Paragragh[];
};

export type Paragragh = {
  text: string;
  type: "text" | "list";
  italic: boolean;
  bold: boolean;
  strikethrough: boolean;
  underline: boolean;
};
