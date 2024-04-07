export type HomePost = {
  node: Post;
};

export type Post = {
  categories: { edge: string[] };
  content: string;
  id: string;
  date: Date;
  featuredImage?: string;
  title: string;
  slug: string;
};
