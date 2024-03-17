import { Article } from "@/components/Article";

type Props = {
  params: { articleId: string };
};
export default function Page({ params: { articleId } }: Props) {
  return (
    <>
      <Article articleId={articleId} />
    </>
  );
}
