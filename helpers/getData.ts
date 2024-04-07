// export const getData = async (
//   query = "",
//   { variables }: Record<string, any> = {}
// ) => {
//   const res = await fetch(process.env.WP_GRAPHQL_API_URL!, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   })
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   const parsed = await res.json();
//   return parsed.data.posts.edges;
// };

export const getData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const parsed = await res.json();
  return parsed.data;
};
