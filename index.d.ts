import { ApiArticleArticle } from "./types/contentTypes";

export type Article = {
  id: Number;
  //   attributes: ArticleAttributes;
  attributes: ApiArticleArticle.attributes;
};

// export type ArticleAttributes = {
//   Title: string;
//   Date: string;
//   Content: ArticleNode[];
// };

// export type ArticleNode = {
//   type: "paragragh" | "list" | "heading" | "quote" | "code";
//   children: ArticleChildNode[];
//   format?: "unordered" | "ordered";
//   level?: "1" | "2" | "3" | "4" | "5" | "6";
// };

// export type ArticleChildNode = {
//   text: string;
//   type: "text" | "list";
//   italic: boolean;
//   bold: boolean;
//   strikethrough: boolean;
//   underline: boolean;
// };
