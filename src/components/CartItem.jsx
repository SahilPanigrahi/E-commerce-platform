'use client';

import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/redux/cartSlice';
import Image from 'next/image';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value, 10) }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <Image width={64} height={64} src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          value={item.quantity}
          min="1"
          className="w-12 text-center border rounded"
          onChange={handleQuantityChange}
        />
        <button
          onClick={handleRemove}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
