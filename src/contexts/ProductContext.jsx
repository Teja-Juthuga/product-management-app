import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialProducts = [
    {
      id: 1,
      category: 'Home Decor',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 546
    },
    {
      id: 2,
      category: 'Books',
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 68
    },
    {
      id: 3,
      category: 'Toys',
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 837
    },
    {
      id: 4,
      category: 'Home Decor',
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 221
    },
    {
      id: 5,
      category: 'Toys',
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 734
    },
    {
      id: 6,
      category: 'Toys',
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 203
    },
    {
      id: 7,
      category: 'Clothing',
      name: 'Product 7',
      description: 'Description for Product 7',
      price: 581
    },
    {
      id: 8,
      category: 'Beauty',
      name: 'Product 8',
      description: 'Description for Product 8',
      price: 287
    },
    {
      id: 9,
      category: 'Clothing',
      name: 'Product 9',
      description: 'Description for Product 9',
      price: 258
    },
    {
      id: 10,
      category: 'Electronics',
      name: 'Product 10',
      description: 'Description for Product 10',
      price: 984
    },
    {
      id: 11,
      category: 'Clothing',
      name: 'Product 11',
      description: 'Description for Product 11',
      price: 549
    },
    {
      id: 12,
      category: 'Electronics',
      name: 'Product 12',
      description: 'Description for Product 12',
      price: 968
    },
    {
      id: 13,
      category: 'Sports',
      name: 'Product 13',
      description: 'Description for Product 13',
      price: 664
    },
    {
      id: 14,
      category: 'Clothing',
      name: 'Product 14',
      description: 'Description for Product 14',
      price: 669
    },
    {
      id: 15,
      category: 'Sports',
      name: 'Product 15',
      description: 'Description for Product 15',
      price: 742
    },
    {
      id: 16,
      category: 'Toys',
      name: 'Product 16',
      description: 'Description for Product 16',
      price: 1001
    },
    {
      id: 17,
      category: 'Clothing',
      name: 'Product 17',
      description: 'Description for Product 17',
      price: 138
    },
    {
      id: 18,
      category: 'Electronics',
      name: 'Product 18',
      description: 'Description for Product 18',
      price: 512
    },
    {
      id: 19,
      category: 'Home Decor',
      name: 'Product 19',
      description: 'Description for Product 19',
      price: 579
    },
    {
      id: 20,
      category: 'Clothing',
      name: 'Product 20',
      description: 'Description for Product 20',
      price: 684
    },
    {
      id: 21,
      category: 'Home Decor',
      name: 'Product 21',
      description: 'Description for Product 21',
      price: 287
    },
    {
      id: 22,
      category: 'Books',
      name: 'Product 22',
      description: 'Description for Product 22',
      price: 947
    },
    {
      id: 23,
      category: 'Home Decor',
      name: 'Product 23',
      description: 'Description for Product 23',
      price: 910
    },
    {
      id: 24,
      category: 'Beauty',
      name: 'Product 24',
      description: 'Description for Product 24',
      price: 729
    },
    {
      id: 25,
      category: 'Sports',
      name: 'Product 25',
      description: 'Description for Product 25',
      price: 619
    },
    {
      id: 26,
      category: 'Electronics',
      name: 'Product 26',
      description: 'Description for Product 26',
      price: 192
    },
    {
      id: 27,
      category: 'Toys',
      name: 'Product 27',
      description: 'Description for Product 27',
      price: 964
    },
    {
      id: 28,
      category: 'Toys',
      name: 'Product 28',
      description: 'Description for Product 28',
      price: 786
    },
    {
      id: 29,
      category: 'Toys',
      name: 'Product 29',
      description: 'Description for Product 29',
      price: 566
    },
    {
      id: 30,
      category: 'Sports',
      name: 'Product 30',
      description: 'Description for Product 30',
      price: 60
    },
    {
      id: 31,
      category: 'Clothing',
      name: 'Product 31',
      description: 'Description for Product 31',
      price: 257
    },
    {
      id: 32,
      category: 'Clothing',
      name: 'Product 32',
      description: 'Description for Product 32',
      price: 365
    },
    {
      id: 33,
      category: 'Home Decor',
      name: 'Product 33',
      description: 'Description for Product 33',
      price: 951
    },
    {
      id: 34,
      category: 'Books',
      name: 'Product 34',
      description: 'Description for Product 34',
      price: 294
    },
    {
      id: 35,
      category: 'Home Decor',
      name: 'Product 35',
      description: 'Description for Product 35',
      price: 865
    },
    {
      id: 36,
      category: 'Sports',
      name: 'Product 36',
      description: 'Description for Product 36',
      price: 523
    },
    {
      id: 37,
      category: 'Clothing',
      name: 'Product 37',
      description: 'Description for Product 37',
      price: 954
    },
    {
      id: 38,
      category: 'Sports',
      name: 'Product 38',
      description: 'Description for Product 38',
      price: 821
    },
    {
      id: 39,
      category: 'Home Decor',
      name: 'Product 39',
      description: 'Description for Product 39',
      price: 1006
    },
    {
      id: 40,
      category: 'Beauty',
      name: 'Product 40',
      description: 'Description for Product 40',
      price: 936
    }
  ];

  const initialCategories = [...new Set(initialProducts.map(product => product.category))];

  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: products.length + 1 // Generate a new ID (not recommended for production)
    };
    setProducts([...products, newProduct]);
    if (!categories.includes(product.category)) {
      setCategories([...categories, product.category]);
    }
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <ProductContext.Provider value={{
      products,
      categories,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};
