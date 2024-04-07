export const getData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const parsed = await res.json();
  return parsed.data;
};
