import { Button } from "antd";
import ProductCard from "../../../components/cards/ProductCard";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/feature/products/productApi";
import Loader from "../../../components/common/Loader";
import { productType } from "../../../types/product.type";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery({
    search: "",
    limit: 10,
  });
  const products = data?.data || [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container py-10">
          <p className="text-center text-2xl font-playwrite font-bold mb-6">
            Products
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product: productType) => (
              <ProductCard key={product._id} productData={product} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to={"/products"}>
              <Button
                type="primary"
                className="btn10 !text-black hover:!text-gray-50 dark:!text-gray-50"
              >
                View all <AiOutlineProduct size={14} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
