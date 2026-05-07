import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./sanity/env";

export const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
