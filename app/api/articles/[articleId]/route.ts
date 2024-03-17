import { NextResponse } from "next/server";

type Props = {
  params: { articleId: string };
};

export async function GET(_req: Request, { params: { articleId } }: Props) {
  const res = await fetch(`${process.env.CMS_URL}/api/articles/${articleId}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return NextResponse.json(data);
}
