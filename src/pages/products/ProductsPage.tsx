import ProductCard from "../../components/cards/ProductCard";
import type { GetProps } from "antd";
import { Input } from "antd";
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const ProductsPage = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const productData = {
    _id: "67486aceb0ba950ca40a7e8e",
    name: "Stapler",
    brand: "Swingline",
    price: 800,
    category: "Office Supplies",
    description: "Reliable stapler for all your office needs.",
    quantity: 200,
    inStock: true,
    createdAt: "2024-04-08T10:50:15.000Z",
    updatedAt: "2024-04-08T10:50:15.000Z",
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="container py-8">
      <div className="searchnav">
        <Search
          placeholder="Product Name"
          allowClear
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product}
            productData={productData}
            isNew={product % 2 == 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
