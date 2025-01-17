"use client";
import { useState, useEffect } from "react";
import React, { Suspense, lazy } from 'react';
const ProductGrid = lazy(() => import('@/components/ProductGrid'));

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductGrid products={filteredProducts} />
      </Suspense>
    </div>
  );
}
