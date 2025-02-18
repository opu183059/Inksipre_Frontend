import { Table } from "antd";
import { selectCurrentUser } from "../../../../redux/feature/auth/authSlice";
import { useGetUserOrderQuery } from "../../../../redux/feature/order/orderApi";
import { useAppSelector } from "../../../../redux/hooks";
import Loader from "../../../../components/common/Loader";
import { ColumnsType } from "antd/es/table";

interface OrderItem {
  product: string;
  quantity: number;
  _id: string;
}

interface transactionType {
  id?: string;
  transactionStatus?: null | string;
  bank_status?: string;
  date_time?: string;
  method?: string;
  sp_code?: string;
  sp_message?: string;
}

interface Order {
  _id: string;
  transaction: transactionType;
  status: string;
  totalAmount: number;
  items: OrderItem[];
}

const Orderpage = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data, isLoading } = useGetUserOrderQuery(user?.userID);
  console.log(isLoading, data);

  const orders = data?.data;

  const columns: ColumnsType<Order> = [
    // {
    //   title: "SL",
    //   key: "serial",
    //   render: (_text, _record, index) => index + 1,
    // },
    {
      title: "Order ID",
      dataIndex: "transaction",
      key: "transaction",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => record.id,
    },
    {
      title: "Quantity",
      dataIndex: "items",
      key: "items",

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) =>
        items?.reduce((total, item) => total + item.quantity, 0),
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          columns={columns}
          dataSource={orders}
          pagination={{ pageSize: 10 }}
          rowKey="_id"
          scroll={{ x: "max-content" }}
        />
      )}
    </>
  );
};

export default Orderpage;
