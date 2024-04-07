import { NextResponse } from "next/server";

type Props = {
  params: { postId: string };
};

export async function GET(_req: Request, { params: { postId } }: Props) {
  const res = await fetch(process.env.WP_GRAPHQL_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query GetPostById($id: ID!) {
        post(id: $id, idType: ID) {
           title
           date
           featuredImage {node {sourceUrl}}
           categories {edges {node {name}}}
           content
           id
        }
      }
      `,
      variables: { id: postId },
    }),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();

  return NextResponse.json(data);
}
