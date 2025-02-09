import { productCardProps } from "../../types/productCardProps.type";
import { trimToWords } from "../../utils/trimText";

const FeaturedCard = ({ productData }: { productData: productCardProps }) => {
  return (
    <div className="cursor-pointer border rounded-lg border-gray-600 hover:shadow-lg dark:hover:shadow-gray-700 duration-300 p-4 flex gap-2 md:gap-6 relative">
      <div className="left w-1/2">
        <img
          src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
          alt="product-image"
        />
      </div>
      <div className="left w-1/2 flex flex-col justify-between">
        <h3 className="md:text-lg font-bold font-playwrite mb-4 mt-2">
          {productData.name}
          <span className="animate-textColor uppercase ml-2">new</span>
        </h3>
        <p className="text-base hidden md:block">
          {trimToWords(productData.description, 15)}
        </p>
        <p className="text-xs md:hidden">
          {trimToWords(productData.description, 10)}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
