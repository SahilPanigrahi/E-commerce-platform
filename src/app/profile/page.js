import Profile from '@/components/profile/Profile'
import React from 'react'

const page = () => {
  return (
    <div>
      <Profile />
    </div>
  )
}

export default page

export const metadata = {
  title: 'Profile | Shopping Website', // The title displayed in the browser tab
  description: // Description for SEO and social sharing
    'Your Profile',
};
