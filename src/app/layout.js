import { Inter } from "next/font/google";
import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
const lexend = Lexend({subsets: ["latin"]});
export const metadata = {
  title: "Home - Badr Stellar",
  description: "Home Badr Stellar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
      <div style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/bg.jpg')",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover"
   }}>
<Toaster/>
    <Navbar/>
        {children}

        </div>
        </body>
    </html>
  );
}
