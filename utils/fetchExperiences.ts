import { Experience } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async () => {
  const experiences: Experience[] = await sanityClient.fetch(query);

  return experiences;
};
