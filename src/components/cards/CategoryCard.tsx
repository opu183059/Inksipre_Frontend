import { categoryCardProps } from "../../types/categoryCardProps";

const CategoryCard = ({ category, icon }: categoryCardProps) => {
  console.log(category);
  return (
    <div className="border rounded-lg category-card border-gray-400 text-primary px-2 py-6 flex flex-col gap-4 items-center justify-center cursor-pointer">
      {icon}
      <p>{category}</p>
    </div>
  );
};

export default CategoryCard;
