import type { SimpleIcon } from "simple-icons";

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const getSimpleIconRemotePath = ({ source, slug }: SimpleIcon) => {
  return `https://cdn.simpleicons.org/${slug}`;
};
