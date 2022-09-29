import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  // set it to state `products`
  const fetchAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");

    setProducts(data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <main>
      <header>
        <h1>Product List</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            imageUrl={product.image}
            price={product.price}
            title={product.title}
            category={product.category}
          ></ProductItem>
        ))}
      </section>
    </main>
  );
};

export default ProductListPage;
