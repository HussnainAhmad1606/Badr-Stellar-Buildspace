import { Inter } from "next/font/google";
import "@/css/globals.css";

export const metadata = {
  title: "Join Wishlist - Badr Stellar",
  description: "Join the wish list of Badr Stellar",
};

export default function RootLayout({ children }) {
  return (
    <>
        {children}  
    </>
  );
}
