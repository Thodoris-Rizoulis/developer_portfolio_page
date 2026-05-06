import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { Skill } from "@/typings";
const query = groq`
    *[_type == "skill"]
`;

export async function GET() {
  const skills: Skill[] = await sanityClient.fetch(query);

  return new Response(JSON.stringify({ skills }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
