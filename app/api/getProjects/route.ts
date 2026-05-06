import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { Project } from "@/typings";
const query = groq`
    *[_type == "project"]{
      ...,
      technologies[]->
    }
`;

export async function GET() {
  const projects: Project[] = await sanityClient.fetch(query);

  return new Response(JSON.stringify({ projects }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
