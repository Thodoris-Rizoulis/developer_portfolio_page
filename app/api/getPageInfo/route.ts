import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PageInfo } from "@/typings";
const query = groq`
    *[_type == "pageInfo"][0]
`;

export async function GET(request: Request) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return new Response(JSON.stringify({ pageInfo }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
