import React, { useContext, useState, useEffect } from 'react';
import { Table, Button, Input, Select, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import EditProductModal from '../components/EditProductModal';

const { Search } = Input;
const { Option } = Select;

const ProductListPage = () => {
  const { products, categories, deleteProduct } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      onOk: () => deleteProduct(id)
    });
  };

  const handleSearch = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filteredData = products.filter(product =>
      product.name.toLowerCase().includes(lowercasedValue) ||
      product.description.toLowerCase().includes(lowercasedValue)
    );
    setFilteredProducts(filteredData);
  };

  const handleCategoryFilter = (value) => {
    if (value) {
      const filteredData = products.filter(product => product.category === value);
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
    }
  };

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categories.map(category => ({ text: category, value: category })),
      onFilter: (value, record) => record.category.includes(value),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => setEditProduct(record)}>Edit</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </>
      ),
    },
  ];

  const rowClassName = (record) => {
    return `category-${record.category.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div>
      <h1 style={{textAlign:"center",}}>Product Management App </h1>
      <div style={{ marginBottom: 16, padding: 32 }}>
        <Link to="/add">
          <Button type="primary">Add Product</Button>
        </Link>
        <Search
          placeholder="Search by name or description"
          onSearch={handleSearch}
          style={{ width: 200, marginLeft: 10 }}
        />
        <Select
          placeholder="Filter by category"
          onChange={handleCategoryFilter}
          allowClear
          style={{ width: 200, marginLeft: 10 }}
        >
          {categories.map(category => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </div>
      <Table
        responsive
        dataSource={filteredProducts}
        columns={columns}
        rowClassName={rowClassName}
        pagination={{ pageSize: 10 }}
        rowKey="id"
      />
      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
        />
      )}
    </div>
  );
}

export default ProductListPage;