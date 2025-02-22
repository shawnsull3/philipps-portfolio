import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "hwk4vm7n",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Set to false if you need fresh data every request
});