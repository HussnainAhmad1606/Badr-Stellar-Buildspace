import { Inter } from "next/font/google";
import "@/css/globals.css";

export const metadata = {
  title: "About - Badr Stellar",
  description: "About Badr Stellar",
};

export default function RootLayout({ children }) {
  return (
    <>
        {children}  
    </>
  );
}
