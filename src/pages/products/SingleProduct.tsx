import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, InputNumber } from "antd";

const SingleProduct = () => {
  const params = useParams();
  console.log(params);

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const productData = {
    _id: "67486aceb0ba950ca40a7e8e",
    name: "Stapler",
    brand: "Swingline",
    price: 800,
    category: "Office Supplies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur obcaecati ipsam est culpa sint incidunt optio earum, itaque laudantium mollitia quod voluptas, officia vero libero placeat? Necessitatibus architecto distinctio hic rerum temporibus cum nulla culpa a reprehenderit? Eius quo architecto voluptatibus temporibus qui dolore et sapiente quidem quaerat cum voluptatem nobis consectetur nam aliquid, ipsam, sint corrupti voluptates iure minima! Perspiciatis ea, iusto commodi reiciendis fugiat eligendi praesentium dolores sapiente assumenda, autem eaque facere odio porro aliquam totam maiores impedit nam. Iusto dolores molestiae vitae cum voluptates? Asperiores tenetur temporibus sapiente doloribus, officiis odio omnis nam, recusandae repudiandae enim consequatur ex iusto reiciendis numquam accusantium praesentium earum unde nulla illo illum quia quas ratione itaque. Eveniet, libero. Magnam unde doloribus blanditiis, illo perspiciatis debitis reprehenderit reiciendis accusamus quos, quibusdam quisquam ipsam sapiente, sunt nemo, amet a ipsum? Id maiores nobis laborum nesciunt assumenda illum quas, sed laboriosam odio blanditiis molestiae voluptatum sapiente, quod dolor temporibus, aperiam magnam labore accusantium cupiditate! Perspiciatis ea provident repudiandae quos vel temporibus qui quibusdam sequi consequuntur expedita.",
    quantity: 200,
    inStock: true,
    imageUrl:
      "https://th.bing.com/th/id/OIP.lU9p084SQG01a8c-ID8goQHaHa?rs=1&pid=ImgDetMain",
    createdAt: "2024-04-08T10:50:15.000Z",
    updatedAt: "2024-04-08T10:50:15.000Z",
  };

  return (
    <div className="container py-8 min-h-60">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-full md:col-span-8 flex flex-col justify-end">
          <h4 className="font-playwrite text-xl md:text-2xl font-semibold">
            {productData.name}
          </h4>
          <p className="uppercase mt-1 text-gray-500">{productData.category}</p>
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
                  {productData.price + Math.floor(Math.random() * 100) + 150}৳
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

          <Button type="primary" className="w-36 btn mt-2">
            Add to Cart
          </Button>
        </div>
        <div className="col-span-full md:col-span-4">
          <img
            src={productData.imageUrl}
            alt={productData.name}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <p className="mt-8">{productData.description}</p>
    </div>
  );
};

export default SingleProduct;
