import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const apiURL = import.meta.env.VITE_PRODUCTS_API
  
    useEffect(() => {

      
      const fetchProducts = async () => {
        const res = await fetch(`${apiURL}/products`);
        const data = await res.json();
        setProducts(data);
      };
      fetchProducts();
    }, []);
  
    return (
      <div className="products-page">
        <h2>Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.title}</h3>
              <p>{product.Description}</p>
              <p>Price: {product.price}</p>
              <button className='btn'>Add to Cart</button>
              
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Products