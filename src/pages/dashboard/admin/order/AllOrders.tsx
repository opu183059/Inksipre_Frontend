import { Button, message, Modal, Select, Table } from "antd";
import Loader from "../../../../components/common/Loader";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "../../../../redux/feature/order/orderApi";
import { ColumnsType } from "antd/es/table";
import { convertDate } from "../../../../utils/convertDate";
import { useState } from "react";
import { IoTrashSharp } from "react-icons/io5";

interface OrderItem {
  product: string;
  quantity: number;
  _id: string;
}

interface TransactionType {
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
  status: string;
  transaction: TransactionType;
  totalAmount: number;
  items: OrderItem[];
  customer: {
    email: string;
    name: string;
    _id: string;
  };
  createdAt: string;
}

const AllOrders = () => {
  const { data, isLoading } = useGetAllOrdersQuery(undefined);
  const [updateOrder, { error: updateError }] = useUpdateOrderMutation();
  const [deleteOrder, { error: deleteError }] = useDeleteOrderMutation();

  console.log(updateError, deleteError);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState<string>("");

  const orders = data?.data;

  const handleUpdateStatus = async () => {
    if (selectedOrderId && newStatus) {
      const toaster = message.loading("Updating order", 0);
      try {
        const res = await updateOrder({
          orderId: selectedOrderId,
          data: { status: newStatus },
        });
        if (res.data.success) {
          toaster();
          message.success("Order status updated successfully!");
        }
        setIsModalVisible(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toaster();
        message.error("Failed to update order status.");
      }
    }
  };

  const handleDeleteOrder = async (orderID: string) => {
    try {
      const res = await deleteOrder(orderID);
      if (res.data.success) {
        message.success("Order is Deleted");
      }
      setIsModalVisible(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      message.error("Failed delete order, try again");
    }
  };

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
      title: "Customer Email",
      dataIndex: "customer",
      key: "customer",
      render: (record) => record.email,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record: Order) => (
        <Button
          type="dashed"
          size="small"
          onClick={() => {
            setSelectedOrderId(record._id);
            setNewStatus(record.status);
            setIsModalVisible(true);
          }}
        >
          Update
        </Button>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (record) => convertDate(record),
    },
    {
      title: "Delete",
      dataIndex: "_id",
      key: "delete",
      render: (record: string) => (
        <IoTrashSharp
          size={20}
          className="text-red-500 cursor-pointer"
          onClick={() => handleDeleteOrder(record)}
        />
      ),
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={orders}
            pagination={{ pageSize: 10 }}
            rowKey="_id"
            scroll={{ x: "max-content" }}
          />
          <Modal
            title="Update Order Status"
            open={isModalVisible}
            onOk={handleUpdateStatus}
            onCancel={() => setIsModalVisible(false)}
            width={350}
          >
            <Select
              value={newStatus}
              onChange={(value) => setNewStatus(value)}
              style={{ width: "100%" }}
            >
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="processing">Processing</Select.Option>
              <Select.Option value="shipped">Shipped</Select.Option>
              <Select.Option value="delivered">Delivered</Select.Option>
              <Select.Option value="cancelled">Cancelled</Select.Option>
            </Select>
          </Modal>
        </>
      )}
    </div>
  );
};

export default AllOrders;
