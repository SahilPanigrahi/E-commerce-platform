import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductGrid({ products }) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOption, setSortOption] = useState("none");
  const itemsPerPage = 8;

  // Filtered and sorted products
  const filteredProducts = products.filter((product) =>
    filterCategory === "All" ? true : product.category === filterCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "title-asc") return a.title.localeCompare(b.title);
    if (sortOption === "title-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (products && products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/6 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label htmlFor="Category" className="block font-semibold mb-2">Category</label>
          <select
            id="Category"
            className="w-full border p-2 rounded"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All</option>
            {[...new Set(products.map((product) => product.category))].map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="Sort By" className="block font-semibold mb-2">Sort By</label>
          <select
            id="Sort By"
            className="w-full border p-2 rounded"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="none">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
          </select>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="w-5/6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? // Render shimmer effect while loading
              Array(8)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="skeleton-card border p-4 rounded hover:shadow-md"
                  >
                    <div className="skeleton-img shimmer"></div>
                    <div className="skeleton-title shimmer"></div>
                    <div className="skeleton-price shimmer"></div>
                    <div className="skeleton-category shimmer"></div>
                  </div>
                ))
            : // Render products once loaded
              paginatedProducts.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="border p-4 rounded hover:shadow-md"
                  aria-label={`View details for ${product.title}`}
                >
                  <Image
                    src={product.image}
                    alt={`${product.title} in ${product.category}`}
                    width={400}
                    height={400}
                    className="w-full h-40 object-cover rounded"
                    priority={true}
                  />
                  <h2 className="text-lg text-center font-bold mt-2">
                    {product.title}
                  </h2>
                  <h3 className="text-sm text-center text-gray-600">
                    {product.category}
                  </h3>
                  <p className="text-xl text-center font-semibold mt-2">
                    ${product.price}
                  </p>
                </Link>
              ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded ${
                currentPage === 1
                  ? "cursor-not-allowed text-gray-400"
                  : "hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-gray-400"
                  : "hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
