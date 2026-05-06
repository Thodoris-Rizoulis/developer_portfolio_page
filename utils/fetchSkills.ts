import { Skill } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"]
`;

export const fetchSkills = async () => {
  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
};
