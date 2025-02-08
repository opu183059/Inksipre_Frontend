import FeaturedCard from "../../../components/cards/FeaturedCard";
import Loader from "../../../components/common/Loader";
import { useGetAllProductsQuery } from "../../../redux/feature/products/productApi";
import { productType } from "../../../types/product.type";

const Featured = () => {
  const { data, isLoading } = useGetAllProductsQuery({
    search: "",
    limit: 4,
  });
  const products = data?.data || [];
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pb-10">
          <p className="text-center text-2xl font-playwrite font-bold mb-6">
            New Arrivals
          </p>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product: productType) => (
              <FeaturedCard key={product._id} productData={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Featured;
