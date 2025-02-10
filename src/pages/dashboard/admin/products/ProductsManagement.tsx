import { Form, Button, Modal, Tag, Image } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Loader from "../../../../components/common/Loader";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../../redux/feature/products/productApi";
import { productType } from "../../../../types/product.type";

import { useState } from "react";
import AddProductForm from "../../../../components/forms/AddProductForm";
import { MdAssignmentAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { message } from "antd";
import EditProductForm from "../../../../components/forms/EditProductForm";
import { IoTrashSharp } from "react-icons/io5";
import { TbExclamationCircleFilled } from "react-icons/tb";

const ProductsManagement = () => {
  const { data, isLoading } = useGetAllProductsQuery({ search: "", limit: "" });

  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);
  const [productID, setProductID] = useState("");

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
    setIsViewProductModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const onFinish = async (productData: productType) => {
    const toster = message.loading("Adding Product...", 0);
    const formattedProductData = {
      ...productData,
      price: Number(productData.price),
      quantity: Number(productData.quantity),
      imageUrl:
        productData?.imageUrl || "https://demofree.sirv.com/nope-not-here.jpg",
    };
    try {
      const res = await addProduct(formattedProductData);
      toster();
      if (res?.data) {
        if (res?.data?.success) {
          message.success(res?.data?.message);
        }
      } else {
        toster();
        // @ts-expect-error not necessary because there will be a data
        message.error(res?.error?.data?.message);
      }
      setIsModalOpen(false);
      form.resetFields();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toster();
      message.error("Failed to add product, please try again!");
    }
  };

  const handleDelete = async () => {
    const toster = message.loading("Deleting...", 0);
    try {
      const res = await deleteProduct(productID);
      toster();
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      toster();
      console.log(error);
    }
    setIsDeleteModalOpen(false);
  };

  const columns: ColumnsType<productType> = [
    {
      title: "SL",
      key: "serial",
      render: (_text, _record, index) => index + 1,
      fixed: "left",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (image: string) => <Image src={image} width={50} />,
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
      title: "Status",
      dataIndex: "inStock",
      key: "inStock",
      render: (inStock) =>
        inStock ? (
          <Tag color="green">Available</Tag>
        ) : (
          <Tag color="red">Not Available</Tag>
        ),
    },
    {
      title: "View/Edit",
      align: "center",
      dataIndex: "_id",
      key: "_id",
      render: (productId) => (
        <Button
          icon={<FaEye size={13} />}
          onClick={() => {
            setProductID(productId);
            setIsViewProductModalOpen(true);
          }}
          className="cursor-pointer"
          type="default"
        >
          View
        </Button>
      ),
    },
    {
      title: "Delete",
      dataIndex: "_id",
      render: (productId: string) => (
        <Button
          icon={<IoTrashSharp />}
          className="text-red-500"
          onClick={() => {
            setIsDeleteModalOpen(true);
            setProductID(productId);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-between mb-5">
            <h4>Total Products: {products?.length}</h4>
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
          <Modal
            centered
            title="Product Details"
            open={isViewProductModalOpen}
            onCancel={handleCancel}
            footer={null}
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "50%",
              xxl: "40%",
            }}
            className="productDetails"
          >
            <EditProductForm
              productId={productID}
              setIsViewProductModalOpen={setIsViewProductModalOpen}
            />
          </Modal>

          <Modal
            title={
              <TbExclamationCircleFilled
                size={20}
                className="text-orange-500"
              />
            }
            open={isDeleteModalOpen}
            okText="Yes"
            okType="danger"
            cancelText="No"
            onOk={handleDelete}
            onCancel={handleCancel}
          >
            <p>Are you sure delete this task?</p>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ProductsManagement;
