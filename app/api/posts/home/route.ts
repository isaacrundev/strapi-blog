import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(process.env.WP_GRAPHQL_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePagePosts {
        posts(first: 10, where: {orderby: {field: DATE, order: DESC}}) {
          edges {
            node {
              title
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
              content
              id
              slug
            }
          }
        }
      }
      `,
      variables: {},
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return NextResponse.json(data);
}
