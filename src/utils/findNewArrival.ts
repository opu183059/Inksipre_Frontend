export const findNewArrival = (date: string) => {
  const productDate = new Date(date);
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - productDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  console.log(productDate, currentDate, diffTime, diffDays);

  return diffDays <= 3;
};
