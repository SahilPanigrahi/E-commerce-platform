"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import React from "react";
import Image from "next/image";

export default function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Unwrap params using React.use() for accessing params.id
  const { id } = React.use(params);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <button
        onClick={handleGoBack}
        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none mb-6"
      >
        Back to Products
      </button>
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
        {product.title}
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="sm:w-1/2 h-80 rounded-lg shadow-md mb-4 sm:mb-0 sm:mr-6"
        />
        <div className="sm:w-1/2">
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-900 mb-6">
            ${product.price}
          </p>
        </div>
      {/* <button
        onClick={handleAddToCart}
        className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
      >
        Add to Cart
      </button> */}
      </div>

    </main>
  );
}
