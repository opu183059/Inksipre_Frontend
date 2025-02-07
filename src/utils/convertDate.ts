export const convertDate = (mongoDate: string) => {
  if (!mongoDate) return "";

  const date = new Date(mongoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
