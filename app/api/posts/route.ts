import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.CMS_URL}/api/articles`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return NextResponse.json(data);
}
