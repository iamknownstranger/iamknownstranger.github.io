export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

// Medium's API returns a blog's content as HTML. Extract the plain text
// found inside paragraph tags so it can be used as a card description.
export const extractTextContent = html => {
  return typeof html === "string"
    ? html
        .split(/<\/p>/i)
        .map(part => part.split(/<p[^>]*>/i).pop())
        .filter(el => el.trim().length > 0)
        .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
        .join(" ")
    : "";
};
