import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Select, Button } from 'antd';
import { ProductContext } from '../contexts/ProductContext';

const { Option } = Select;

const AddProductPage = () => {
  const { categories, addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    addProduct(values);
    // Redirect or navigate back to the product list page
    navigate("/")
  };

  return (
    <div>
      <h1>Add Product</h1>
      <Form
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select>
            {categories.map(category => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter the product name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter the product description' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter the product price' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;
