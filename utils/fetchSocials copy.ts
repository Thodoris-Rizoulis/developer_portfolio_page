import { Social } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "social"]
`;

export const fetchSocials = async () => {
  const socials: Social[] = await sanityClient.fetch(query);

  return socials;
};
