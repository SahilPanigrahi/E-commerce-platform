import CartPage from '@/components/CartPage';
import React from 'react'

const page = () => {
  return (
    <div>
      <CartPage />
    </div>
  )
}

export default page

export const metadata = {
  title: 'Cart | Shopping Website', // The title displayed in the browser tab
  description: // Description for SEO and social sharing
    'Details about the cart',
};