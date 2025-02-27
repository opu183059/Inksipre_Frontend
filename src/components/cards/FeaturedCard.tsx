import { Link } from "react-router-dom";
import { productCardProps } from "../../types/productCardProps.type";
import { findNewArrival } from "../../utils/findNewArrival";

const FeaturedCard = ({ productData }: { productData: productCardProps }) => {
  const isNew = findNewArrival(productData.updatedAt);
  return (
    <Link to={`/products/${productData?._id}`}>
      <div className="cursor-pointer border rounded-lg border-gray-600 hover:shadow-lg dark:hover:shadow-gray-700 duration-300 p-4 flex gap-2 md:gap-6 relative">
        <div className="left w-1/2">
          <img
            src={productData?.imageUrl}
            alt="product-image"
            className="md:h-56 rounded-md"
          />
        </div>
        <div className="right w-1/2 flex flex-col justify-between">
          <h3 className="md:text-lg font-bold font-playwrite mb-4 mt-2">
            {productData.name}
            {isNew && (
              <span className="animate-textColor uppercase ml-2">new</span>
            )}
          </h3>
          <p className="text-base line-clamp-4 md:line-clamp-6">
            {productData.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
