import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "hwk4vm7n",
  dataset: "production",
  apiVersion: "2024-01-01", // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});