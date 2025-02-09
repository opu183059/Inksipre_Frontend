import { Button, Form, Input, message, Select, Switch, Upload } from "antd";
import { ProductCategory, productType } from "../../types/product.type";
import { MdOutlineFileUpload } from "react-icons/md";

const { TextArea } = Input;

const AddProductForm = ({
  form,
  onFinish,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  onFinish: (values: productType) => void;
}) => {
  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (data.success) {
        form.setFieldsValue({ imageUrl: data.data.url });
        console.log("Image uploaded successfully!");
      } else {
        console.error("Failed to upload image");
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      message.error("Image upload error!");
    }
  };

  return (
    <Form
      form={form}
      name="add-product"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        inStock: true,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        label="Product Image"
        name="imageUrl"
        rules={[{ required: true, message: "Please upload an image" }]}
      >
        <Upload
          beforeUpload={(file) => {
            handleImageUpload(file);
            return false;
          }}
          listType="picture"
          maxCount={1}
        >
          <Button icon={<MdOutlineFileUpload />}>Upload</Button>
        </Upload>
      </Form.Item>

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
