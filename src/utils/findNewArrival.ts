// export const findNewArrival = (date: string) => {
//   const productDate = new Date(date);
//   const currentDate = new Date();
//   const diffTime = currentDate.getTime() - productDate.getTime();
//   const diffDays = diffTime / (1000 * 60 * 60 * 24);

//   console.log(productDate, currentDate, diffTime, diffDays);

//   return diffDays <= 3;
// };

export const findNewArrival = (updatedAt: string): boolean => {
  const updatedDate = new Date(updatedAt);
  const currentDate = new Date();

  const differenceInTime = currentDate.getTime() - updatedDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

  return differenceInDays <= 5;
};
