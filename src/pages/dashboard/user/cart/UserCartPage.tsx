import { Table, Image } from "antd";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentCart } from "../../../../redux/feature/cart/cartSlice";

interface Product {
  key: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const UserCartPage = () => {
  const cartData = useAppSelector(selectCurrentCart);
  console.log(cartData);

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
  ];

  const totalCartPrice = cartData.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <div>
      <Table
        columns={columns}
        dataSource={cartData}
        pagination={false}
        rowKey="key"
      />
      <div>
        <div>
          <p>Total Price: {totalCartPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCartPage;
