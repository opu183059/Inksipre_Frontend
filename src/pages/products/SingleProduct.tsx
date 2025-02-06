import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, InputNumber, message } from "antd";
import { useGetSpecificProductsQuery } from "../../redux/feature/products/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/feature/cart/cartSlice";
import Loader from "../../components/common/Loader";

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSpecificProductsQuery(params?.productId);

  const productData = data?.data;

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const imageUrl =
    "https://th.bing.com/th/id/OIP.lU9p084SQG01a8c-ID8goQHaHa?rs=1&pid=ImgDetMain";

  const handleAddToCart = () => {
    const product = {
      product: productData?._id,
      name: productData?.name,
      price: productData?.price,
      quantity,
    };
    dispatch(addToCart(product));
    message.success("Added to cart successfully");
  };

  return (
    <div className="container py-8 min-h-60">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.data ? (
            <>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-full md:col-span-8 flex flex-col justify-end">
                  <h4 className="font-playwrite text-xl md:text-2xl font-semibold">
                    {productData.name}
                  </h4>
                  <p className="uppercase mt-1 text-gray-500">
                    {productData.category}
                  </p>
                  <hr className="bg-gray-400 h-[2px] mb-6" />
                  <div className="grid grid-cols-12">
                    <div className="col-span-3 lg:col-span-2">
                      <p>Brand</p>
                      <p>Category</p>
                      <p>Quantity</p>
                      <p>Available</p>
                      <p>Price</p>
                    </div>
                    <div className="col-span-7 md:col-span-10">
                      <p>: {productData.brand}</p>
                      <p>: {productData.category}</p>
                      <p>: {productData.quantity}</p>
                      <p>: {productData.inStock ? "Yes" : "No"}</p>
                      <p>
                        :
                        <span className="font-semibold text-orange-600 ml-1">
                          {productData.price}৳
                        </span>
                        <span className="line-through ml-2 text-gray-500">
                          {productData.price +
                            Math.floor(Math.random() * 100) +
                            150}
                          ৳
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <Button
                      onClick={handleDecrease}
                      className="!bg-gray-100  !text-black"
                    >
                      -
                    </Button>

                    <InputNumber
                      min={1}
                      value={quantity}
                      onChange={(value) => setQuantity(value || 1)}
                      className="w-16 text-center"
                    />

                    <Button
                      onClick={handleIncrease}
                      className="!bg-gray-100  !text-black"
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    type="primary"
                    className="w-36 btn mt-2"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="col-span-full md:col-span-4">
                  <img
                    src={imageUrl}
                    alt={productData.name}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              <p className="mt-8">{productData.description}</p>
            </>
          ) : (
            <p>No data found</p>
          )}
        </>
      )}
    </div>
  );
};

export default SingleProduct;
