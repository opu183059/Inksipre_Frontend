import { Badge } from "antd";
import { productCardProps } from "../../types/productCardProps.type";
import { Link } from "react-router-dom";
import { findNewArrival } from "../../utils/findNewArrival";

const ProductCard = ({ productData }: { productData: productCardProps }) => {
  const { _id, name, price, category, updatedAt, imageUrl } = productData;

  const isNew = findNewArrival(updatedAt);

  return (
    <>
      {isNew ? (
        <Badge.Ribbon text="New" color="pink">
          <Link to={`/products/${_id}`}>
            <div className="border rounded-md overflow-hidden border-gray-600 cursor-pointer category-card">
              <img
                src={imageUrl}
                alt=""
                className="w-full md:h-40 lg:h-28 object-cover rounded-b-md"
              />
              <div className="p-2">
                <p className="font-semibold font-playwrite text-sm text-primary">
                  {name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-500">
                  {category}
                </p>
                <h5 className="text-orange-600 font-bold mt-2 font-playwrite">
                  ৳ {price}
                  <del className="text-gray-500 text-[11px] ml-3">
                    ৳ {price + Math.floor(Math.random() * 100) + 150}
                  </del>
                </h5>
              </div>
            </div>
          </Link>
        </Badge.Ribbon>
      ) : (
        <Link to={`/products/${_id}`}>
          <div className="border rounded-md overflow-hidden border-gray-600 cursor-pointer category-card">
            <img
              src={imageUrl}
              alt=""
              className="w-full md:h-40 lg:h-28 object-cover rounded-b-md"
            />
            <div className="p-2">
              <p className="font-semibold font-playwrite text-sm text-primary">
                {name}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-500">
                {category}
              </p>
              <h5 className="text-orange-600 font-bold mt-2 font-playwrite">
                ৳ {price}
                <del className="text-gray-500 text-[11px] ml-3">
                  ৳ {price + Math.floor(Math.random() * 100) + 150}
                </del>
              </h5>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default ProductCard;
