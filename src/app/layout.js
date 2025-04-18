import "./globals.css";
import ReduxProvider from "@/redux/redux-provider";
import Header from "@/components/landing-page/Header";
import { AuthProvider } from "./Providers";
const Footer = dynamic(() => import('@/components/common/Footer'))
import dynamic from 'next/dynamic'



export const metadata = {
  title: "Shopping Website | Experience the better",
  description: "Shopping Website is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          </ReduxProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
