import React, { useContext, useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { ProductContext } from '../contexts/ProductContext';

const { Option } = Select;

const EditProductModal = ({ product, onClose }) => {
  const { categories, updateProduct } = useContext(ProductContext);
  const [form] = Form.useForm();

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    }
  }, [product, form]);

  const onFinish = (values) => {
    updateProduct({ ...product, ...values });
    onClose();
  };

  return (
    <Modal
      visible={true}
      title="Edit Product"
      onCancel={onClose}
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        initialValues={product}
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
      </Form>
    </Modal>
  );
};

export default EditProductModal;
