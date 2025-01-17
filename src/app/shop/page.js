import Shop from '@/components/shop/Shop'
import React from 'react'

const page = () => {
  return (
    <div>
      <Shop />
    </div>
  )
}

export default page

export const metadata = {
  title: 'Shop | Shopping Website', // The title displayed in the browser tab
  description: // Description for SEO and social sharing
    'Shop as much you want',
};
