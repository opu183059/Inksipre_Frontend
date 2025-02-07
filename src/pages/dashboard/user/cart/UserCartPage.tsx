import { Table, Image, Button, message } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  clearCart,
  removeFromCart,
  selectCurrentCart,
} from "../../../../redux/feature/cart/cartSlice";
import { useCreateOrderMutation } from "../../../../redux/feature/order/orderApi";
import { IoTrashSharp } from "react-icons/io5";

interface Product {
  key: string;
  product: string;
  name: string;
  quantity: number;
  price: number;
}

const UserCartPage = () => {
  const cartData = useAppSelector(selectCurrentCart);
  const [createOrder, { error }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();

  console.log(error);

  const handleRemoveFromCart = (productId: string, productName: string) => {
    message.warning(`${productName} removed from cart`);
    dispatch(removeFromCart(productId));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => <Image src={image} width={50} />,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `৳ ${price}`,
    },
    {
      title: "Total",
      key: "total",
      render: (record: Product) => (
        <span>৳ {record.price * record.quantity}</span>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (record: Product) => (
        <IoTrashSharp
          size={20}
          className="text-red-500 cursor-pointer"
          onClick={() => handleRemoveFromCart(record.product, record.name)}
        />
      ),
    },
  ];

  const totalCartPrice = cartData.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const placeOrder = async () => {
    const toster = message.loading("Placing order...", 0);
    try {
      const res = await createOrder({ items: cartData });
      if (res.data.success) {
        setTimeout(() => {
          dispatch(clearCart());
          window.location.href = res.data.data;
        }, 500);
      }
    } catch (err) {
      toster();
      console.log(err);
      message.error("Something went wrong");
    }
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={cartData}
        pagination={false}
        rowKey="product"
        scroll={{ x: "max-content" }}
      />
      {cartData.length > 0 && (
        <div className="mt-10 flex gap-4 justify-end items-center">
          <p>
            Total Price:
            <span className="text-orange-600 font-bold ml-1">
              {totalCartPrice}
            </span>
            ৳
          </p>

          <Button type="primary" onClick={placeOrder}>
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserCartPage;
