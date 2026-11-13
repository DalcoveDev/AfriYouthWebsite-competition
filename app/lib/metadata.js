export function createMetadata({
  title = "Fueling Innovators for Sustainable Development.",
  description,
  openGraphDescription,
  path = "/",
}) {
  return {
    title,
    description,
    openGraphDescription,
    path,
  };
}