import { defineField, defineType } from "sanity";

export const social = defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Platform for social media",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
  ],
});
