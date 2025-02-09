import { Form, Button, Modal } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Loader from "../../../../components/common/Loader";
import {
  useAddProductMutation,
  useGetAllProductsQuery,
} from "../../../../redux/feature/products/productApi";
import { productType } from "../../../../types/product.type";
import { convertDate } from "../../../../utils/convertDate";
import { useState } from "react";
import AddProductForm from "../../../../components/forms/AddProductForm";
import { MdAssignmentAdd } from "react-icons/md";
import { message } from "antd";

const ProductsManagement = () => {
  const { data, isLoading } = useGetAllProductsQuery({ search: "", limit: "" });
  const [addProduct] = useAddProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const products = data?.data;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      form.submit();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      message.error("Please fill in all required fields.");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (productData: productType) => {
    const toster = message.loading("Adding Product...", 0);
    const formattedProductData = {
      ...productData,
      price: Number(productData.price),
      quantity: Number(productData.quantity),
    };
    try {
      const res = await addProduct(formattedProductData);
      if (res?.data?.success) {
        toster();
        message.success(res?.data?.message);
      }
      setIsModalOpen(false);
      form.resetFields();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toster();
      message.error("Failed to add product, please try again!");
    }
  };

  const columns: ColumnsType<productType> = [
    {
      title: "SL",
      key: "serial",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => convertDate(date),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => convertDate(date),
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-end mb-5">
            <Button
              type="primary"
              onClick={showModal}
              icon={<MdAssignmentAdd />}
            >
              Add Product
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={products}
            pagination={false}
            rowKey="_id"
            scroll={{ x: "max-content" }}
          />
          <Modal
            centered
            title="Add Product"
            open={isModalOpen}
            onOk={handleOk}
            okText={"Add Product"}
            onCancel={handleCancel}
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "50%",
              xxl: "40%",
            }}
          >
            <AddProductForm form={form} onFinish={onFinish} />
          </Modal>
        </div>
      )}
    </>
  );
};

export default ProductsManagement;
