import { Button, Form, Input, message, Select, Switch } from "antd";
import { ProductCategory, productType } from "../../types/product.type";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import {
  useGetSpecificProductsQuery,
  useUpdateProductMutation,
} from "../../redux/feature/products/productApi";
import Loader from "../common/Loader";

type EditProductFormProps = {
  productId: string;
  setIsViewProductModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditProductForm = ({
  productId,
  setIsViewProductModalOpen,
}: EditProductFormProps) => {
  const [edit, setEdit] = useState(true);
  const [form] = Form.useForm();

  const { data, isLoading } = useGetSpecificProductsQuery(productId);
  const [updateProduct] = useUpdateProductMutation();

  const productData = data?.data;

  useEffect(() => {
    if (productData) {
      form.setFieldsValue(productData);
    }
  }, [productData, form]);

  const onFinish = async (values: Partial<productType>) => {
    const args = {
      productId,
      data: {
        ...values,
        price: Number(values.price),
        quantity: Number(values.quantity),
      },
    };
    try {
      const res = await updateProduct(args);
      console.log(res);
      if (res.data.success) {
        message.success("Success");
      }
    } catch (err) {
      console.log(err);
    }
    setIsViewProductModalOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-end gap-2 mb-2">
            <p>Edit: </p>
            <Switch
              onChange={() => {
                setEdit(!edit);
              }}
            ></Switch>
          </div>
          <Form
            form={form}
            name="Edit-product"
            disabled={edit}
            onFinish={onFinish}
            layout="vertical"
            initialValues={productData}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="Product Name" name="name">
                <Input placeholder="Enter product name" />
              </Form.Item>

              <Form.Item label="Brand" name="brand">
                <Input placeholder="Enter product brand" />
              </Form.Item>

              <Form.Item label="Category" name="category">
                <Select placeholder="Select product category">
                  {Object.values(ProductCategory).map((category) => (
                    <Select.Option key={category} value={category}>
                      {category}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item label="Price" name="price">
                <Input type="number" placeholder="Enter price" />
              </Form.Item>

              <Form.Item label="Quantity" name="quantity">
                <Input type="number" placeholder="Enter quantity" />
              </Form.Item>

              <Form.Item
                label="In Stock"
                name="inStock"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </div>

            <Form.Item label="Description" name="description">
              <TextArea rows={4} placeholder="Enter product description" />
            </Form.Item>

            {!edit && (
              <Form.Item className="text-primary">
                <Button block type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            )}
          </Form>
        </div>
      )}
    </>
  );
};

export default EditProductForm;
