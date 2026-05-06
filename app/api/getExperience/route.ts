import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { Experience } from "@/typings";
const query = groq`
    *[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const experiences: Experience[] = await sanityClient.fetch(query);

  return new Response(JSON.stringify({ experiences }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
