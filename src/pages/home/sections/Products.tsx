import { Button } from "antd";
import ProductCard from "../../../components/cards/ProductCard";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
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

  return (
    <div className="container py-10">
      <p className="text-center text-2xl font-playwrite font-bold mb-6">
        Products
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product}
            productData={productData}
            isNew={product % 2 == 0}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to={"/products"}>
          <Button
            type="primary"
            className="btn10 !text-black hover:!text-gray-50"
          >
            View all <AiOutlineProduct size={14} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
