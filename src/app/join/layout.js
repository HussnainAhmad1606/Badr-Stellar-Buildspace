import { Inter } from "next/font/google";
import "@/css/globals.css";

export const metadata = {
  title: "Join Waitlist - Badr Stellar",
  description: "Join the Waitlist of Badr Stellar",
};

export default function RootLayout({ children }) {
  return (
    <>
        {children}  
    </>
  );
}
