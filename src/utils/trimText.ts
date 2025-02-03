export const trimToWords = (text: string, wordLimit: number) => {
  const words = text.split(" "); // Split by normal spaces only
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};
