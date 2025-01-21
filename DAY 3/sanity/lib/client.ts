import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "64onzlxf", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (e.g., "production")
  apiVersion: "2025-01-20", // Use the API version you're using in the Vision Tool
  useCdn: false, // Set to false for development
});
