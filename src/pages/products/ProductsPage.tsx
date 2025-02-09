import ProductCard from "../../components/cards/ProductCard";
import type { GetProps } from "antd";
import { Input } from "antd";
import { useGetAllProductsQuery } from "../../redux/feature/products/productApi";
import { useState } from "react";
import Loader from "../../components/common/Loader";
import { productType } from "../../types/product.type";
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetAllProductsQuery({
    search: searchTerm,
    limit: "",
  });
  const productData = data?.data || [];

  const onSearch: SearchProps["onSearch"] = (value) => {
    setSearchTerm(value.trim());
  };

  return (
    <div className="container py-8 min-h-80">
      <div className="searchnav">
        <Search
          placeholder="Product Name"
          allowClear
          onSearch={onSearch}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          style={{ width: 200 }}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {productData && productData?.length ? (
            productData.map((product: productType, index: number) => (
              <ProductCard
                key={index}
                productData={product}
                isNew={index % 2 == 0}
              />
            ))
          ) : (
            <p>No product found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
