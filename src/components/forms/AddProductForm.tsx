import { Form, Input, Select, Switch } from "antd";
import { ProductCategory, productType } from "../../types/product.type";

const { TextArea } = Input;

const AddProductForm = ({
  form,
  onFinish,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  onFinish: (values: productType) => void;
}) => {
  return (
    <Form
      form={form} // Use the passed form instance
      name="add-product"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        inStock: true,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          label="Brand"
          name="brand"
          rules={[{ required: true, message: "Please enter product brand" }]}
        >
          <Input placeholder="Enter product brand" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter product price" }]}
        >
          <Input type="number" placeholder="Enter price" />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please enter product quantity" }]}
        >
          <Input type="number" placeholder="Enter quantity" />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select product category">
            {Object.values(ProductCategory).map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="In Stock" name="inStock" valuePropName="checked">
          <Switch />
        </Form.Item>
      </div>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please enter product description" },
        ]}
      >
        <TextArea rows={4} placeholder="Enter product description" />
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
