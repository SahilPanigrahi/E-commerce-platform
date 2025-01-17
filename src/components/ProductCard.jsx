import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="border p-4 rounded hover:shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
}
