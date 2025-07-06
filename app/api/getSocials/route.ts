import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { Social } from "@/typings";
const query = groq`
    *[_type == "social"]
`;

export async function GET(request: Request) {
  const socials: Social[] = await sanityClient.fetch(query);

  return new Response(JSON.stringify({ socials }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
